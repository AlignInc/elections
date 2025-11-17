/*
  # Populate Candidate Policies - Part 1

  ## Overview
  This migration populates the policies table with real policy data extracted from
  all 51 candidates' electoral messages for the 2025 Hong Kong Legislative Council Election.

  This is Part 1, covering Hong Kong Island East, Hong Kong Island West, Kowloon East,
  Kowloon West, and Kowloon Central constituencies (26 candidates).

  ## Changes
  - Extract and structure policy content from electoral messages
  - Create individual policy records for each candidate's policy points
  - Link policies to candidates using candidate_id
  - Set last_updated to 2025-11-11 (data extraction date)

  ## Data Source
  Official electoral messages from the Electoral Affairs Commission
*/

-- Hong Kong Island East - 吳秋北 (5 policies)
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '確保本地職工就業優先', '全面提升勞工權益及退休保障，保障本地勞工優先就業權利', '2025-11-11'
FROM candidates WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '加強長者服務', '增加長者中心及院舍名額，免費普及樂齡科技，打造銀髮食堂及社區客廳，改善長者福利', '2025-11-11'
FROM candidates WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善醫療服務', '慢病共治平台增設「行業計劃」，提升基層醫療服務質素', '2025-11-11'
FROM candidates WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '加快公營房屋供應', '加快公營房屋供應及興建進度，協助市民安居', '2025-11-11'
FROM candidates WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '優化東區設施', '持續優化東區海濱長廊及配套設施，優化東區行車道路規劃，增強社區應對極端天氣能力', '2025-11-11'
FROM candidates WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';
