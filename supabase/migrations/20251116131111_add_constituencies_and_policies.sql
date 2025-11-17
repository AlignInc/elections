/*
  # 擴展選舉資訊系統數據庫

  1. 新資料表
    - `constituencies` - 選區資訊表
      - `id` (uuid, 主鍵)
      - `name_zh` (text) - 選區名稱（繁體中文）
      - `name_en` (text) - 選區名稱（英文）
      - `type` (text) - 選區類型（地方選區/功能界別/選委會界別）
      - `region` (text) - 地區/行業類別
      - `description` (text) - 選區描述
      - `seats` (integer) - 議席數
      - `created_at` (timestamptz)

    - `policies` - 政綱資訊表
      - `id` (uuid, 主鍵)
      - `candidate_id` (uuid, 外鍵)
      - `title` (text) - 政綱標題
      - `summary` (text) - 摘要
      - `full_text` (text) - 完整內容
      - `source_url` (text) - 來源連結
      - `last_updated` (date) - 最後更新日期
      - `created_at` (timestamptz)

    - `topic_tags` - 議題標籤表
      - `id` (uuid, 主鍵)
      - `name_zh` (text) - 標籤名稱（繁體中文）
      - `name_en` (text) - 標籤名稱（英文）
      - `category` (text) - 類別
      - `icon` (text) - 圖標
      - `created_at` (timestamptz)

    - `policy_topics` - 政綱議題關聯表（多對多）
      - `policy_id` (uuid, 外鍵)
      - `topic_id` (uuid, 外鍵)

    - `address_mappings` - 地址選區映射表
      - `id` (uuid, 主鍵)
      - `constituency_id` (uuid, 外鍵)
      - `district` (text) - 區域名稱
      - `street_pattern` (text) - 街道模式（用於匹配）
      - `landmark_name` (text) - 地標名稱
      - `priority` (integer) - 優先級

  2. 更新現有資料表
    - 為 `candidates` 表添加 `constituency_id` 外鍵
    - 添加 `biography` 和 `party_affiliation` 欄位

  3. 安全性
    - 所有新表啟用 RLS
    - 公開可讀政策（選舉資料屬公開資訊）

  4. 索引
    - 為選區、議題、地址映射建立必要索引
*/

-- 創建選區表
CREATE TABLE IF NOT EXISTS constituencies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_zh text NOT NULL,
  name_en text NOT NULL,
  type text NOT NULL DEFAULT '地方選區',
  region text,
  description text,
  seats integer DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- 創建議題標籤表
CREATE TABLE IF NOT EXISTS topic_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_zh text NOT NULL UNIQUE,
  name_en text NOT NULL,
  category text,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- 創建政綱表
CREATE TABLE IF NOT EXISTS policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id uuid NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  title text NOT NULL,
  summary text,
  full_text text,
  source_url text,
  last_updated date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- 創建政綱議題關聯表
CREATE TABLE IF NOT EXISTS policy_topics (
  policy_id uuid NOT NULL REFERENCES policies(id) ON DELETE CASCADE,
  topic_id uuid NOT NULL REFERENCES topic_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (policy_id, topic_id)
);

-- 創建地址映射表
CREATE TABLE IF NOT EXISTS address_mappings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  constituency_id uuid NOT NULL REFERENCES constituencies(id) ON DELETE CASCADE,
  district text NOT NULL,
  street_pattern text,
  landmark_name text,
  priority integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 更新 candidates 表，添加選區外鍵
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'constituency_id'
  ) THEN
    ALTER TABLE candidates ADD COLUMN constituency_id uuid REFERENCES constituencies(id);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'biography'
  ) THEN
    ALTER TABLE candidates ADD COLUMN biography text;
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'candidates' AND column_name = 'party_affiliation'
  ) THEN
    ALTER TABLE candidates ADD COLUMN party_affiliation text;
  END IF;
END $$;

-- 建立索引
CREATE INDEX IF NOT EXISTS idx_constituencies_type ON constituencies(type);
CREATE INDEX IF NOT EXISTS idx_constituencies_region ON constituencies(region);
CREATE INDEX IF NOT EXISTS idx_policies_candidate ON policies(candidate_id);
CREATE INDEX IF NOT EXISTS idx_policy_topics_policy ON policy_topics(policy_id);
CREATE INDEX IF NOT EXISTS idx_policy_topics_topic ON policy_topics(topic_id);
CREATE INDEX IF NOT EXISTS idx_address_constituency ON address_mappings(constituency_id);
CREATE INDEX IF NOT EXISTS idx_address_district ON address_mappings(district);
CREATE INDEX IF NOT EXISTS idx_candidates_constituency ON candidates(constituency_id);

-- 為全文搜索創建索引（使用中文分詞）
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'policies' AND column_name = 'search_vector'
  ) THEN
    ALTER TABLE policies ADD COLUMN search_vector tsvector;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_policies_search ON policies USING gin(search_vector);

-- 創建更新搜索向量的觸發器
CREATE OR REPLACE FUNCTION update_policy_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('simple', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('simple', COALESCE(NEW.summary, '')), 'B') ||
    setweight(to_tsvector('simple', COALESCE(NEW.full_text, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS policies_search_vector_update ON policies;
CREATE TRIGGER policies_search_vector_update
  BEFORE INSERT OR UPDATE ON policies
  FOR EACH ROW
  EXECUTE FUNCTION update_policy_search_vector();

-- 啟用 RLS
ALTER TABLE constituencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE topic_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE address_mappings ENABLE ROW LEVEL SECURITY;

-- 創建公開讀取政策
CREATE POLICY "選區資料公開可讀" ON constituencies FOR SELECT USING (true);
CREATE POLICY "政綱資料公開可讀" ON policies FOR SELECT USING (true);
CREATE POLICY "議題標籤公開可讀" ON topic_tags FOR SELECT USING (true);
CREATE POLICY "政綱議題關聯公開可讀" ON policy_topics FOR SELECT USING (true);
CREATE POLICY "地址映射公開可讀" ON address_mappings FOR SELECT USING (true);