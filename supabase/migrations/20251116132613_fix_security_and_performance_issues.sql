/*
  # 修復安全性和性能問題

  1. 安全修復
    - 修復 `update_policy_search_vector` 函數的 search_path 安全問題
    - 設置函數為 SECURITY DEFINER 並使用固定的 search_path

  2. 索引優化
    - 保留實際使用的索引
    - 移除未使用的冗余索引
    - 確保外鍵有適當的索引

  3. 變更說明
    - `idx_candidates_constituency` - 保留（用於按選區查詢候選人）
    - `idx_policies_candidate` - 保留（用於查詢候選人政綱）
    - `idx_address_constituency` - 保留（用於地址映射查詢）
    - 移除其他未使用的索引以減少寫入開銷
*/

-- 1. 修復函數安全問題
DROP TRIGGER IF EXISTS policies_search_vector_update ON policies;
DROP FUNCTION IF EXISTS update_policy_search_vector();

-- 重新創建函數，使用安全的 search_path
CREATE OR REPLACE FUNCTION update_policy_search_vector()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public, pg_temp
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('simple', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('simple', COALESCE(NEW.summary, '')), 'B') ||
    setweight(to_tsvector('simple', COALESCE(NEW.full_text, '')), 'C');
  RETURN NEW;
END;
$$;

-- 重新創建觸發器
CREATE TRIGGER policies_search_vector_update
  BEFORE INSERT OR UPDATE ON policies
  FOR EACH ROW
  EXECUTE FUNCTION update_policy_search_vector();

-- 2. 移除未使用的索引以優化寫入性能
DROP INDEX IF EXISTS idx_candidates_name_en;
DROP INDEX IF EXISTS idx_constituencies_region;
DROP INDEX IF EXISTS idx_policy_topics_policy;
DROP INDEX IF EXISTS idx_policy_topics_topic;
DROP INDEX IF EXISTS idx_address_district;

-- 3. 保留關鍵索引（這些會被實際使用）
-- idx_candidates_constituency - 用於 getCandidatesByConstituency
-- idx_policies_candidate - 用於 getPoliciesByCandidate
-- idx_address_constituency - 用於地址映射查詢
-- idx_policies_search - 用於全文搜索
-- idx_constituencies_type - 用於按類型篩選選區

-- 4. 添加複合索引以優化常見查詢
CREATE INDEX IF NOT EXISTS idx_address_mappings_search 
  ON address_mappings(district, landmark_name, priority DESC);

-- 5. 為按類型和區域排序的查詢添加複合索引
CREATE INDEX IF NOT EXISTS idx_constituencies_type_region 
  ON constituencies(type, region, name_zh);

-- 6. 添加註釋說明索引用途
COMMENT ON INDEX idx_candidates_constituency IS 'Used by getCandidatesByConstituency query';
COMMENT ON INDEX idx_policies_candidate IS 'Used by getPoliciesByCandidate query';
COMMENT ON INDEX idx_address_constituency IS 'Used by address mapping queries';
COMMENT ON INDEX idx_policies_search IS 'Used by full-text search on policies';
COMMENT ON INDEX idx_address_mappings_search IS 'Composite index for address search optimization';
COMMENT ON INDEX idx_constituencies_type_region IS 'Composite index for constituency filtering and sorting';
