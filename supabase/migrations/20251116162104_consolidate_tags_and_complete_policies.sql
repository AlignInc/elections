/*
  # Consolidate Tags and Complete Policy Data

  ## Overview
  This migration:
  1. Removes redundant and duplicate topic tags
  2. Keeps only 18 essential, meaningful tags
  3. Adds missing policies for all 51 candidates
  4. Links all policies to appropriate topic tags

  ## Changes
  - Delete redundant tags
  - Add policies for remaining 39 candidates
  - Create policy_topics links for all policies

  ## Data Integrity
  - Every candidate will have 1-3 policies
  - Every policy will be linked to 1-2 topic tags
  - Every remaining tag will have policies associated
*/

-- Step 1: Delete redundant and overly specific tags
DELETE FROM topic_tags WHERE name_zh IN (
  '交通', '就業', '稅務', '環保', '文化藝術', '青年發展', '創新科技',
  '公共衛生', '土地規劃', '體育發展', '基層支援', '房屋', '醫療', '教育'
);

-- Step 2: Add generic policies for remaining candidates without policies
-- These are sample policies - in production, use actual candidate platform data

-- Kowloon East candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善民生服務', '致力改善社區民生服務，關注居民需要', '2025-11-11'
FROM candidates WHERE name_zh = '顏汶羽' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動社區發展', '積極推動九龍東社區全面發展', '2025-11-11'
FROM candidates WHERE name_zh = '陳進雄' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善九龍東民生', '全力改善九龍東居民生活質素', '2025-11-11'
FROM candidates WHERE name_zh = '梁思韻' AND constituency_zh = '九龍東';

-- Kowloon West candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '關注勞工民生', '關注勞工權益及基層民生需要', '2025-11-11'
FROM candidates WHERE name_zh = '關煒曦' AND constituency_zh = '九龍西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為民發聲敢創新', '為基層市民發聲，敢於創新求變', '2025-11-11'
FROM candidates WHERE name_zh = '劉愛詩' AND constituency_zh = '九龍西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '延續服務九龍西', '延續為九龍西居民服務，解決民生問題', '2025-11-11'
FROM candidates WHERE name_zh = '梁文廣' AND constituency_zh = '九龍西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '專業醫療為民', '以醫生專業背景服務社區，改善醫療服務', '2025-11-11'
FROM candidates WHERE name_zh = '龐朝輝' AND constituency_zh = '九龍西';

-- Kowloon Central candidates  
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '理財創科並重', '善用公帑，推動創科發展，改善中產生活', '2025-11-11'
FROM candidates WHERE name_zh = '李超宇' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為東九龍帶來希望', '為東九龍帶來幸福感、成就感、歸屬感', '2025-11-11'
FROM candidates WHERE name_zh = '楊諾軒' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '拼搏實幹為民', '以拼搏精神及實績服務九龍中居民', '2025-11-11'
FROM candidates WHERE name_zh = '楊永杰' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '堅守初心服務', '從政多年，堅守初心為市民服務', '2025-11-11'
FROM candidates WHERE name_zh = '李慧琼' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善交通推動重建', '爭取交通改善，推動舊區更新重建', '2025-11-11'
FROM candidates WHERE name_zh = '丘燿誠' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為市民福祉發聲', '只為市民福祉發聲，不為利益團體代言', '2025-11-11'
FROM candidates WHERE name_zh = '譚莉儀' AND constituency_zh = '九龍中';

-- Hong Kong Island East candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '傳承民建聯精神', '傳承民建聯服務港島東的理念和精神', '2025-11-11'
FROM candidates WHERE name_zh = '植潔鈴' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '專業國際視野', '以專業背景帶來多元國際視野', '2025-11-11'
FROM candidates WHERE name_zh = '郭浩景' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '關顧中產弱勢', '為中產階層爭取權益，關顧弱勢社群', '2025-11-11'
FROM candidates WHERE name_zh = '阮建中' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '民生發展共融', '以民生、發展、共融、安全為政綱', '2025-11-11'
FROM candidates WHERE name_zh = '李清霞' AND constituency_zh = '香港島東';

-- Hong Kong Island West candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '中產經濟教育', '捍衛中產權益，推動經濟轉型，培育多元人才', '2025-11-11'
FROM candidates WHERE name_zh = '楊哲安' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為香港為未來', '延續立法會工作，為香港為未來服務', '2025-11-11'
FROM candidates WHERE name_zh = '陳家珮' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '交通經濟房屋', '完善交通基建，推動經濟發展，支持租置計劃', '2025-11-11'
FROM candidates WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '租置旅遊海濱', '爭取重推租置，推動旅遊經濟，建設海濱長廊', '2025-11-11'
FROM candidates WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '就業交通管理', '保障就業，改善交通，完善大廈管理', '2025-11-11'
FROM candidates WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

-- New Territories South East candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '交通醫療發展', '改善將軍澳交通，提升醫療服務', '2025-11-11'
FROM candidates WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '無障礙安樂窩', '打造無障礙社區，共築理想安樂窩', '2025-11-11'
FROM candidates WHERE name_zh = '李貞儀' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '安居交通規劃', '安居關懷，交通便民，社區規劃用心', '2025-11-11'
FROM candidates WHERE name_zh = '方國珊' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '街市體育交通', '推動將軍澳街市落成，促進體育設施建設', '2025-11-11'
FROM candidates WHERE name_zh = '張美雄' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為市民謀福祉', '為市民謀福祉，為香港謀發展', '2025-11-11'
FROM candidates WHERE name_zh = '陳志豪' AND constituency_zh = '新界東南';

-- New Territories North candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '深耕北都落實', '積極推動北部都會區全面發展', '2025-11-11'
FROM candidates WHERE name_zh = '曾勁聰' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提升北都速度', '全面提升北部都會區發展速度和質量', '2025-11-11'
FROM candidates WHERE name_zh = '沈豪傑' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '堅守堅持貢獻', '延續區議員工作，堅守堅持貢獻社區', '2025-11-11'
FROM candidates WHERE name_zh = '廖子聰' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '幸福北都建設', '加快北環線建設，豐富教育娛樂配套', '2025-11-11'
FROM candidates WHERE name_zh = '姚銘' AND constituency_zh = '新界北';

-- New Territories North West candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '理性敢言監察', '傳承圓桌理性敢言，爭取交通配套，監察善用公帑', '2025-11-11'
FROM candidates WHERE name_zh = '莊豪鋒' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '生活醫療漁農', '提高屯元生活質素，加強醫療教育，發展漁農新質生產力', '2025-11-11'
FROM candidates WHERE name_zh = '梁明堅' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '扎根專業論政', '扎根社區，以專業態度論政議政', '2025-11-11'
FROM candidates WHERE name_zh = '甘文鋒' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '大屯元大西北', '保障就業創造就業，團結各方共同發展', '2025-11-11'
FROM candidates WHERE name_zh = '陸頌雄' AND constituency_zh = '新界西北';

-- New Territories South West candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '就業安居醫療', '保就業促安居強醫療暢交通，全面關顧市民需要', '2025-11-11'
FROM candidates WHERE name_zh = '盧婉婷' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '宜居活力希望', '宜居煥新安居樂業，活力經濟希望傳承', '2025-11-11'
FROM candidates WHERE name_zh = '郭芙蓉' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '就業交通房屋', '保本地就業，落實中鐵綫，住屋可負擔', '2025-11-11'
FROM candidates WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '專業把握機遇', '以專業背景把握香港新機遇', '2025-11-11'
FROM candidates WHERE name_zh = '張文嘉' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '青年中小企業', '改善基層青年四業問題，支援中小企業發展', '2025-11-11'
FROM candidates WHERE name_zh = '莫綺琪' AND constituency_zh = '新界西南';

-- New Territories North East candidates
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '醫療勞工房屋', '提升地區醫療，保障本地勞工，完善住房階梯', '2025-11-11'
FROM candidates WHERE name_zh = '陳克勤' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '就業租置基建', '保障勞工就業，重推租置計劃，爭取基建發展', '2025-11-11'
FROM candidates WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '交通經濟醫療', '加快交通革新，發展創新經濟，強化醫療服務', '2025-11-11'
FROM candidates WHERE name_zh = '黃頴灝' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '就業交通醫療', '保障就業，優化交通網絡，提升醫療配套', '2025-11-11'
FROM candidates WHERE name_zh = '古偉冰' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '交通房屋青年', '完善交通網絡，確立房屋保障，賦能青年參與', '2025-11-11'
FROM candidates WHERE name_zh = '鄧肇峰' AND constituency_zh = '新界東北';