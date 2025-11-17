import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('缺少 Supabase 環境變數');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Constituency {
  id: string;
  name_zh: string;
  name_en: string;
  type: string;
  region: string | null;
  description: string | null;
  seats: number;
  created_at: string;
}

export interface Candidate {
  id: string;
  constituency_id: string | null;
  constituency_zh: string;
  constituency_en: string;
  candidate_number: number;
  name_zh: string;
  name_en: string;
  gender: string | null;
  age: string | null;
  occupation: string | null;
  affiliation: string | null;
  party_affiliation: string | null;
  email: string | null;
  website: string | null;
  photo_url: string | null;
  platform_pdf_url: string | null;
  source_gc_intro_page: string | null;
  source_gc_nomination_text: string | null;
  electoral_message: string | null;
  created_at: string;
  updated_at: string;
}

export interface Policy {
  id: string;
  candidate_id: string;
  title: string;
  summary: string | null;
  full_text: string | null;
  source_url: string | null;
  last_updated: string;
  created_at: string;
}

export interface TopicTag {
  id: string;
  name_zh: string;
  name_en: string;
  category: string | null;
  icon: string | null;
  created_at: string;
}

export interface AddressMapping {
  id: string;
  constituency_id: string;
  district: string;
  street_pattern: string | null;
  landmark_name: string | null;
  priority: number;
  created_at: string;
}
