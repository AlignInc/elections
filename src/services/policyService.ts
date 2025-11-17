import { supabase, type Policy, type TopicTag } from '../lib/supabase';

export const policyService = {
  async getPoliciesByCandidate(candidateId: string): Promise<Policy[]> {
    const { data, error } = await supabase
      .from('policies')
      .select('*')
      .eq('candidate_id', candidateId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getPolicyById(id: string): Promise<Policy | null> {
    const { data, error } = await supabase
      .from('policies')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getAllTopicTags(): Promise<TopicTag[]> {
    const { data, error } = await supabase
      .from('topic_tags')
      .select('*')
      .order('category', { ascending: true })
      .order('name_zh', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getTopicsByPolicy(policyId: string): Promise<TopicTag[]> {
    const { data, error } = await supabase
      .from('policy_topics')
      .select('topic_tags(*)')
      .eq('policy_id', policyId);

    if (error) throw error;

    return data?.map((item: any) => item.topic_tags).filter(Boolean) || [];
  },

  async searchPoliciesByKeyword(keyword: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('policies')
      .select(`
        *,
        candidates(*)
      `)
      .or(`title.ilike.%${keyword}%,summary.ilike.%${keyword}%,full_text.ilike.%${keyword}%`)
      .order('last_updated', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getTopicTagsByCandidate(candidateId: string): Promise<TopicTag[]> {
    const { data, error } = await supabase
      .from('policy_topics')
      .select(`
        topic_tags(*)
      `)
      .in('policy_id',
        supabase
          .from('policies')
          .select('id')
          .eq('candidate_id', candidateId)
      );

    if (error) throw error;

    const topicTags = data?.map((item: any) => item.topic_tags).filter(Boolean) || [];

    const uniqueTopics = Array.from(
      new Map(topicTags.map((tag: TopicTag) => [tag.id, tag])).values()
    );

    return uniqueTopics;
  }
};
