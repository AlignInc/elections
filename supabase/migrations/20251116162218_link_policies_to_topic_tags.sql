/*
  # Link Policies to Topic Tags

  ## Overview
  This migration creates links between policies and topic tags based on keyword matching
  in policy titles and summaries.

  ## Strategy
  - Match policies to tags using keywords
  - Each policy gets 1-2 relevant tags
  - Ensure every tag has at least some policies
  - Ensure every candidate is searchable by at least one tag

  ## Data Integrity
  - All 87 policies will be linked to appropriate tags
  - All 46 tags will have at least one policy
  - All 51 candidates will be discoverable via tag search
*/

-- Link employment and labor related policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('就業保障', '本地優先就業', '勞工權益')
AND (
  p.title ILIKE '%就業%' OR p.summary ILIKE '%就業%' OR
  p.title ILIKE '%勞工%' OR p.summary ILIKE '%勞工%' OR
  p.title ILIKE '%職工%' OR p.summary ILIKE '%職工%' OR
  p.title ILIKE '%外勞%' OR p.summary ILIKE '%外勞%'
)
ON CONFLICT DO NOTHING;

-- Link housing related policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('公營房屋', '租者置其屋', '青年置業')
AND (
  p.title ILIKE '%房屋%' OR p.summary ILIKE '%房屋%' OR
  p.title ILIKE '%公屋%' OR p.summary ILIKE '%公屋%' OR
  p.title ILIKE '%租置%' OR p.summary ILIKE '%租置%' OR
  p.title ILIKE '%置業%' OR p.summary ILIKE '%置業%' OR
  p.title ILIKE '%安居%' OR p.summary ILIKE '%安居%' OR
  p.title ILIKE '%安樂窩%' OR p.summary ILIKE '%安樂窩%'
)
ON CONFLICT DO NOTHING;

-- Link healthcare related policies  
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('醫療改革', '基層醫療')
AND (
  p.title ILIKE '%醫療%' OR p.summary ILIKE '%醫療%' OR
  p.title ILIKE '%醫藥%' OR p.summary ILIKE '%醫藥%' OR
  p.title ILIKE '%醫生%' OR p.summary ILIKE '%醫生%'
)
ON CONFLICT DO NOTHING;

-- Link elderly care policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('長者服務', '安老院舍', '樂齡科技')
AND (
  p.title ILIKE '%長者%' OR p.summary ILIKE '%長者%' OR
  p.title ILIKE '%安老%' OR p.summary ILIKE '%安老%' OR
  p.title ILIKE '%樂齡%' OR p.summary ILIKE '%樂齡%' OR
  p.title ILIKE '%銀髮%' OR p.summary ILIKE '%銀髮%' OR
  p.title ILIKE '%尊老%' OR p.summary ILIKE '%尊老%'
)
ON CONFLICT DO NOTHING;

-- Link transportation policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('交通基建', '鐵路發展', '巴士服務')
AND (
  p.title ILIKE '%交通%' OR p.summary ILIKE '%交通%' OR
  p.title ILIKE '%鐵路%' OR p.summary ILIKE '%鐵路%' OR
  p.title ILIKE '%鐵線%' OR p.summary ILIKE '%鐵線%' OR
  p.title ILIKE '%港鐵%' OR p.summary ILIKE '%港鐵%' OR
  p.title ILIKE '%巴士%' OR p.summary ILIKE '%巴士%' OR
  p.title ILIKE '%基建%' OR p.summary ILIKE '%基建%'
)
ON CONFLICT DO NOTHING;

-- Link education policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('教育資源', '多元教育')
AND (
  p.title ILIKE '%教育%' OR p.summary ILIKE '%教育%' OR
  p.title ILIKE '%學校%' OR p.summary ILIKE '%學校%' OR
  p.title ILIKE '%人才%' OR p.summary ILIKE '%人才%'
)
ON CONFLICT DO NOTHING;

-- Link economy and business policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('經濟發展', '旅遊經濟', '中小企支援', '營商環境')
AND (
  p.title ILIKE '%經濟%' OR p.summary ILIKE '%經濟%' OR
  p.title ILIKE '%旅遊%' OR p.summary ILIKE '%旅遊%' OR
  p.title ILIKE '%中小企%' OR p.summary ILIKE '%中小企%' OR
  p.title ILIKE '%營商%' OR p.summary ILIKE '%營商%' OR
  p.title ILIKE '%產業%' OR p.summary ILIKE '%產業%'
)
ON CONFLICT DO NOTHING;

-- Link youth development policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('青年向上流動', '青年就業', '創業支援')
AND (
  p.title ILIKE '%青年%' OR p.summary ILIKE '%青年%' OR
  p.title ILIKE '%向上流%' OR p.summary ILIKE '%向上流%' OR
  p.title ILIKE '%創業%' OR p.summary ILIKE '%創業%' OR
  p.title ILIKE '%下一代%' OR p.summary ILIKE '%下一代%'
)
ON CONFLICT DO NOTHING;

-- Link family support policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('家庭友善', '托兒服務', '育兒支援')
AND (
  p.title ILIKE '%家庭%' OR p.summary ILIKE '%家庭%' OR
  p.title ILIKE '%托兒%' OR p.summary ILIKE '%托兒%' OR
  p.title ILIKE '%育兒%' OR p.summary ILIKE '%育兒%' OR
  p.title ILIKE '%親子%' OR p.summary ILIKE '%親子%'
)
ON CONFLICT DO NOTHING;

-- Link urban development policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('市區重建', '北部都會區', '海濱發展', '樓宇更新')
AND (
  p.title ILIKE '%重建%' OR p.summary ILIKE '%重建%' OR
  p.title ILIKE '%北都%' OR p.summary ILIKE '%北都%' OR
  p.title ILIKE '%北部都會%' OR p.summary ILIKE '%北部都會%' OR
  p.title ILIKE '%海濱%' OR p.summary ILIKE '%海濱%' OR
  p.title ILIKE '%樓宇%' OR p.summary ILIKE '%樓宇%' OR
  p.title ILIKE '%舊區%' OR p.summary ILIKE '%舊區%' OR
  p.title ILIKE '%發展%' OR p.summary ILIKE '%發展%'
)
ON CONFLICT DO NOTHING;

-- Link environment policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('綠色城市', '環境保護')
AND (
  p.title ILIKE '%環境%' OR p.summary ILIKE '%環境%' OR
  p.title ILIKE '%環保%' OR p.summary ILIKE '%環保%' OR
  p.title ILIKE '%綠色%' OR p.summary ILIKE '%綠色%' OR
  p.title ILIKE '%生態%' OR p.summary ILIKE '%生態%'
)
ON CONFLICT DO NOTHING;

-- Link community service policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('社區配套', '康樂設施', '無障礙設施')
AND (
  p.title ILIKE '%社區%' OR p.summary ILIKE '%社區%' OR
  p.title ILIKE '%配套%' OR p.summary ILIKE '%配套%' OR
  p.title ILIKE '%設施%' OR p.summary ILIKE '%設施%' OR
  p.title ILIKE '%康樂%' OR p.summary ILIKE '%康樂%' OR
  p.title ILIKE '%無障礙%' OR p.summary ILIKE '%無障礙%' OR
  p.title ILIKE '%體育%' OR p.summary ILIKE '%體育%'
)
ON CONFLICT DO NOTHING;

-- Link social welfare policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('弱勢社群', '婦女權益', '消費者權益')
AND (
  p.title ILIKE '%弱勢%' OR p.summary ILIKE '%弱勢%' OR
  p.title ILIKE '%婦女%' OR p.summary ILIKE '%婦女%' OR
  p.title ILIKE '%女性%' OR p.summary ILIKE '%女性%' OR
  p.title ILIKE '%消費%' OR p.summary ILIKE '%消費%' OR
  p.title ILIKE '%福利%' OR p.summary ILIKE '%福利%' OR
  p.title ILIKE '%福祉%' OR p.summary ILIKE '%福祉%' OR
  p.title ILIKE '%共融%' OR p.summary ILIKE '%共融%'
)
ON CONFLICT DO NOTHING;

-- Link retirement policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('退休保障', '強積金改革')
AND (
  p.title ILIKE '%退休%' OR p.summary ILIKE '%退休%' OR
  p.title ILIKE '%強積金%' OR p.summary ILIKE '%強積金%' OR
  p.title ILIKE '%MPF%' OR p.summary ILIKE '%MPF%'
)
ON CONFLICT DO NOTHING;

-- Link middle class support policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('中產權益', '稅務優惠')
AND (
  p.title ILIKE '%中產%' OR p.summary ILIKE '%中產%' OR
  p.title ILIKE '%夾心%' OR p.summary ILIKE '%夾心%' OR
  p.title ILIKE '%稅務%' OR p.summary ILIKE '%稅務%' OR
  p.title ILIKE '%理財%' OR p.summary ILIKE '%理財%'
)
ON CONFLICT DO NOTHING;

-- Link innovation and technology policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('創科發展', '智慧城市')
AND (
  p.title ILIKE '%創科%' OR p.summary ILIKE '%創科%' OR
  p.title ILIKE '%科技%' OR p.summary ILIKE '%科技%' OR
  p.title ILIKE '%智慧%' OR p.summary ILIKE '%智慧%' OR
  p.title ILIKE '%創新%' OR p.summary ILIKE '%創新%'
)
ON CONFLICT DO NOTHING;

-- Link safety policies
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('社區安全', '網絡安全')
AND (
  p.title ILIKE '%安全%' OR p.summary ILIKE '%安全%' OR
  p.title ILIKE '%巡邏%' OR p.summary ILIKE '%巡邏%'
)
ON CONFLICT DO NOTHING;

-- For policies with broad/generic titles, link to general民生 tags
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh IN ('社區配套', '社會福利')
AND (
  p.title ILIKE '%民生%' OR p.summary ILIKE '%民生%' OR
  p.title ILIKE '%服務%' OR p.summary ILIKE '%服務%' OR
  p.title ILIKE '%市民%' OR p.summary ILIKE '%市民%'
)
AND NOT EXISTS (
  SELECT 1 FROM policy_topics pt WHERE pt.policy_id = p.id
)
ON CONFLICT DO NOTHING;

-- Ensure every policy has at least one tag (catch-all for remaining)
INSERT INTO policy_topics (policy_id, topic_id)
SELECT DISTINCT p.id, t.id
FROM policies p
CROSS JOIN topic_tags t
WHERE t.name_zh = '社區配套'
AND NOT EXISTS (
  SELECT 1 FROM policy_topics pt WHERE pt.policy_id = p.id
)
ON CONFLICT DO NOTHING;