/*
  # 修復候選人表外鍵索引問題

  1. 問題
    - `idx_candidates_constituency` 索引建立在錯誤的欄位上（constituency_zh）
    - 應該建立在外鍵欄位 `constituency_id` 上

  2. 解決方案
    - 刪除錯誤的索引
    - 在 `constituency_id` 外鍵欄位上創建正確的索引
    - 這將優化 `getCandidatesByConstituency` 查詢性能
*/

-- 刪除建立在錯誤欄位上的索引
DROP INDEX IF EXISTS idx_candidates_constituency;

-- 在正確的外鍵欄位上創建索引
CREATE INDEX IF NOT EXISTS idx_candidates_constituency_id 
  ON candidates(constituency_id);

-- 添加註釋
COMMENT ON INDEX idx_candidates_constituency_id IS 'Foreign key index for candidates.constituency_id - used by getCandidatesByConstituency';

-- 驗證外鍵約束存在
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'candidates_constituency_id_fkey'
    AND table_name = 'candidates'
  ) THEN
    ALTER TABLE candidates 
    ADD CONSTRAINT candidates_constituency_id_fkey 
    FOREIGN KEY (constituency_id) 
    REFERENCES constituencies(id) 
    ON DELETE SET NULL;
  END IF;
END $$;
