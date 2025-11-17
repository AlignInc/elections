/*
  # 2025香港立法會候選人資料庫

  1. 新資料表
    - `candidates`
      - `id` (uuid, 主鍵) - 候選人唯一識別碼
      - `constituency_zh` (text) - 選區名稱（繁體中文）
      - `constituency_en` (text) - 選區名稱（英文）
      - `candidate_number` (integer) - 候選人編號
      - `name_zh` (text) - 候選人中文姓名
      - `name_en` (text) - 候選人英文姓名
      - `gender` (text) - 性別
      - `occupation` (text) - 職業
      - `affiliation` (text) - 政治聯繫/所屬團體
      - `email` (text) - 聯絡電郵
      - `website` (text) - 個人網站
      - `platform` (text) - 政綱全文
      - `photo_url` (text) - 候選人照片URL
      - `created_at` (timestamptz) - 記錄建立時間
      - `updated_at` (timestamptz) - 記錄更新時間

  2. 安全性
    - 為 `candidates` 資料表啟用 RLS（行級安全性）
    - 新增政策允許所有用戶讀取候選人資料（公開資訊）
    - 只有管理員可以新增、修改或刪除候選人資料

  3. 索引
    - 為選區名稱建立索引以提升查詢效能
    - 為候選人姓名建立索引以支援搜尋功能
*/

CREATE TABLE IF NOT EXISTS candidates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  constituency_zh text NOT NULL,
  constituency_en text NOT NULL,
  candidate_number integer NOT NULL,
  name_zh text NOT NULL,
  name_en text NOT NULL,
  gender text,
  occupation text,
  affiliation text,
  email text,
  website text,
  platform text,
  photo_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 為選區建立索引
CREATE INDEX IF NOT EXISTS idx_candidates_constituency ON candidates(constituency_zh);

-- 為候選人姓名建立索引以支援搜尋
CREATE INDEX IF NOT EXISTS idx_candidates_name_zh ON candidates(name_zh);
CREATE INDEX IF NOT EXISTS idx_candidates_name_en ON candidates(name_en);

-- 啟用行級安全性
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- 允許所有用戶讀取候選人資料（公開資訊）
CREATE POLICY "候選人資料公開可讀"
  ON candidates
  FOR SELECT
  USING (true);

-- 未來如需要管理功能，可新增以下政策（目前註釋）
-- CREATE POLICY "管理員可新增候選人"
--   ON candidates
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (auth.jwt()->>'role' = 'admin');

-- CREATE POLICY "管理員可更新候選人"
--   ON candidates
--   FOR UPDATE
--   TO authenticated
--   USING (auth.jwt()->>'role' = 'admin')
--   WITH CHECK (auth.jwt()->>'role' = 'admin');

-- CREATE POLICY "管理員可刪除候選人"
--   ON candidates
--   FOR DELETE
--   TO authenticated
--   USING (auth.jwt()->>'role' = 'admin');