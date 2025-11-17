import { supabase, type Candidate } from '../lib/supabase';

export const candidateService = {
  async getAllCandidates(): Promise<Candidate[]> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .order('constituency_zh', { ascending: true })
      .order('candidate_number', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getCandidatesByConstituency(constituency: string): Promise<Candidate[]> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('constituency_zh', constituency)
      .order('candidate_number', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async searchCandidates(searchTerm: string): Promise<Candidate[]> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .or(`name_zh.ilike.%${searchTerm}%,name_en.ilike.%${searchTerm}%`)
      .order('constituency_zh', { ascending: true })
      .order('candidate_number', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async filterByAffiliation(affiliation: string): Promise<Candidate[]> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .ilike('affiliation', `%${affiliation}%`)
      .order('constituency_zh', { ascending: true })
      .order('candidate_number', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  async getCandidateById(candidateId: string): Promise<Candidate | null> {
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .eq('id', candidateId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  getConstituencies(): string[] {
    return [
      '香港島東',
      '香港島西',
      '九龍東',
      '九龍西',
      '九龍中',
      '新界東南',
      '新界北',
      '新界西北',
      '新界西南',
      '新界東北'
    ];
  }
};
