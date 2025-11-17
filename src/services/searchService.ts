import { supabase, type TopicTag } from '../lib/supabase';

export interface IssueSearchRequest {
  queryText: string;
  topicFilters?: string[];
  userConstituencyId?: string;
}

export interface PolicySnippet {
  policy_id: string;
  title: string;
  excerpt: string;
  source_url: string | null;
  last_updated: string;
}

export interface IssueSearchResult {
  candidate: {
    id: string;
    name_zh: string;
    name_en: string;
    constituency: {
      id: string;
      name_zh: string;
    };
    party_affiliation: string | null;
    photo_url: string | null;
  };
  matched_topics: TopicTag[];
  policy_snippets: PolicySnippet[];
  is_user_constituency: boolean;
}

export const searchService = {
  async searchByIssue(request: IssueSearchRequest): Promise<IssueSearchResult[]> {
    const { queryText, topicFilters = [], userConstituencyId } = request;

    let policyIds: string[] = [];

    if (topicFilters.length > 0) {
      const { data: policyTopics, error: ptError } = await supabase
        .from('policy_topics')
        .select('policy_id')
        .in('topic_id', topicFilters);

      if (ptError) throw ptError;

      if (!policyTopics || policyTopics.length === 0) {
        return [];
      }

      policyIds = [...new Set(policyTopics.map(pt => pt.policy_id))];
    }

    let query = supabase
      .from('policies')
      .select(`
        id,
        title,
        summary,
        full_text,
        source_url,
        last_updated,
        candidate_id,
        candidates(
          id,
          name_zh,
          name_en,
          party_affiliation,
          photo_url,
          constituency_id,
          constituencies(id, name_zh)
        )
      `);

    if (policyIds.length > 0) {
      query = query.in('id', policyIds);
    }

    if (queryText) {
      query = query.or(
        `title.ilike.%${queryText}%,summary.ilike.%${queryText}%,full_text.ilike.%${queryText}%`
      );
    }

    const { data: policies, error } = await query;

    if (error) throw error;
    if (!policies || policies.length === 0) return [];

    const candidateMap = new Map<string, IssueSearchResult>();
    const policyIdSet = new Set(policies.map(p => p.id));

    for (const policy of policies) {
      const candidate = (policy as any).candidates;
      if (!candidate) continue;

      const candidateId = candidate.id;

      if (!candidateMap.has(candidateId)) {
        const constituency = candidate.constituencies || { id: '', name_zh: '' };
        candidateMap.set(candidateId, {
          candidate: {
            id: candidate.id,
            name_zh: candidate.name_zh,
            name_en: candidate.name_en,
            constituency: {
              id: constituency.id,
              name_zh: constituency.name_zh
            },
            party_affiliation: candidate.party_affiliation,
            photo_url: candidate.photo_url
          },
          matched_topics: [],
          policy_snippets: [],
          is_user_constituency: constituency.id === userConstituencyId
        });
      }

      const result = candidateMap.get(candidateId)!;

      const excerpt = policy.summary ||
        (policy.full_text ? policy.full_text.substring(0, 200) + '...' : '') ||
        policy.title;

      result.policy_snippets.push({
        policy_id: policy.id,
        title: policy.title,
        excerpt,
        source_url: policy.source_url,
        last_updated: policy.last_updated
      });
    }

    const { data: policyTopicsData, error: topicsError } = await supabase
      .from('policy_topics')
      .select(`
        policy_id,
        topic_tags(*)
      `)
      .in('policy_id', Array.from(policyIdSet));

    if (!topicsError && policyTopicsData) {
      const topicsByCandidate = new Map<string, Set<string>>();

      for (const pt of policyTopicsData) {
        const policyId = pt.policy_id;
        const policy = policies.find(p => p.id === policyId);
        if (!policy) continue;

        const candidate = (policy as any).candidates;
        if (!candidate) continue;

        const candidateId = candidate.id;

        if (!topicsByCandidate.has(candidateId)) {
          topicsByCandidate.set(candidateId, new Set());
        }

        const topicTag = (pt as any).topic_tags;
        if (topicTag) {
          topicsByCandidate.get(candidateId)!.add(JSON.stringify(topicTag));
        }
      }

      for (const [candidateId, topicsSet] of topicsByCandidate) {
        const result = candidateMap.get(candidateId);
        if (result) {
          result.matched_topics = Array.from(topicsSet)
            .map(str => JSON.parse(str) as TopicTag);
        }
      }
    }

    const results = Array.from(candidateMap.values());

    results.sort((a, b) => {
      if (a.is_user_constituency !== b.is_user_constituency) {
        return a.is_user_constituency ? -1 : 1;
      }
      return a.candidate.name_zh.localeCompare(b.candidate.name_zh, 'zh-HK');
    });

    return results;
  },

  getDisclaimer(): string {
    return '結果僅展示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的推薦或評價。';
  }
};
