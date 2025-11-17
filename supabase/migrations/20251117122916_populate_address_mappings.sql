/*
  # Populate Address to Constituency Mappings

  1. Purpose
    - Populate the address_mappings table with comprehensive Hong Kong district data
    - Enable users to search by district names, areas, and landmarks
    - Map addresses like "太古城道100號" to correct constituencies

  2. Data Structure
    - Maps Hong Kong's 18 districts to legislative constituencies
    - Includes major areas, neighborhoods, and landmarks within each district
    - Priority scoring: Higher for exact district matches, lower for general areas

  3. Constituency Mapping
    Hong Kong Island:
    - 香港島東 (Hong Kong Island East): 東區, 灣仔東部
    - 香港島西 (Hong Kong Island West): 中西區, 灣仔西部, 南區
    
    Kowloon:
    - 九龍西 (Kowloon West): 油尖旺, 深水埗
    - 九龍中 (Kowloon Central): 九龍城, 黃大仙
    - 九龍東 (Kowloon East): 觀塘
    
    New Territories:
    - 新界西南 (NT South West): 葵青, 荃灣, 離島
    - 新界西北 (NT North West): 屯門, 元朗
    - 新界東北 (NT North East): 北區, 大埔
    - 新界東南 (NT South East): 沙田, 西貢

  4. Security
    - Public read access already enabled via RLS policies
*/

-- Clear existing mappings to avoid duplicates
DELETE FROM address_mappings;

-- Hong Kong Island East (香港島東) - 東區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '東區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '太古城',
  '太古城',
  '太古城道',
  95
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '鰂魚涌',
  '鰂魚涌',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '西灣河',
  '西灣河',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '筲箕灣',
  '筲箕灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '柴灣',
  '柴灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '小西灣',
  '小西灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島東';

-- Hong Kong Island West (香港島西) - 中西區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '中西區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '中環',
  '中環',
  NULL,
  95
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '上環',
  '上環',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '西環',
  '西環',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '堅尼地城',
  '堅尼地城',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '半山',
  '半山',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '山頂',
  '山頂',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

-- Hong Kong Island West - 灣仔區 (Western part)
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '灣仔區',
  NULL,
  NULL,
  95
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '灣仔',
  '灣仔',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '銅鑼灣',
  '銅鑼灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '跑馬地',
  '跑馬地',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '天后',
  '天后',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

-- Hong Kong Island West - 南區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '南區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '香港仔',
  '香港仔',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '黃竹坑',
  '黃竹坑',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '赤柱',
  '赤柱',
  NULL,
  90
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '淺水灣',
  '淺水灣',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '薄扶林',
  '薄扶林',
  NULL,
  85
FROM constituencies WHERE name_zh = '香港島西';

-- Kowloon West (九龍西) - 油尖旺區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '油尖旺區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '旺角',
  '旺角',
  '彌敦道',
  95
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '尖沙咀',
  '尖沙咀',
  NULL,
  95
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '油麻地',
  '油麻地',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '佐敦',
  '佐敦',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '太子',
  '太子',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大角咀',
  '大角咀',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍西';

-- Kowloon West - 深水埗區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '深水埗區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '深水埗',
  '深水埗',
  NULL,
  95
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '長沙灣',
  '長沙灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '荔枝角',
  '荔枝角',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '美孚',
  '美孚',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍西';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '石硤尾',
  '石硤尾',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍西';

-- Kowloon Central (九龍中) - 九龍城區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '九龍城區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '九龍城',
  '九龍城',
  NULL,
  95
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '土瓜灣',
  '土瓜灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '紅磡',
  '紅磡',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '何文田',
  '何文田',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '啟德',
  '啟德',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍中';

-- Kowloon Central - 黃大仙區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '黃大仙區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '黃大仙',
  '黃大仙',
  NULL,
  95
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '鑽石山',
  '鑽石山',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '慈雲山',
  '慈雲山',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '新蒲崗',
  '新蒲崗',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍中';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '樂富',
  '樂富',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍中';

-- Kowloon East (九龍東) - 觀塘區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '觀塘區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '觀塘',
  '觀塘',
  NULL,
  95
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '藍田',
  '藍田',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '九龍灣',
  '九龍灣',
  NULL,
  90
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '牛頭角',
  '牛頭角',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '秀茂坪',
  '秀茂坪',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍東';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '油塘',
  '油塘',
  NULL,
  85
FROM constituencies WHERE name_zh = '九龍東';

-- New Territories South West (新界西南) - 葵青區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '葵青區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '葵涌',
  '葵涌',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '葵芳',
  '葵芳',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '青衣',
  '青衣',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西南';

-- New Territories South West - 荃灣區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '荃灣區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '荃灣',
  '荃灣',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '馬灣',
  '馬灣',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '汀九',
  '汀九',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西南';

-- New Territories South West - 離島區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '離島區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '東涌',
  '東涌',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大嶼山',
  '大嶼山',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '南丫島',
  '南丫島',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '長洲',
  '長洲',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '坪洲',
  '坪洲',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西南';

-- New Territories North West (新界西北) - 屯門區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '屯門區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '屯門',
  '屯門',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '天水圍',
  '天水圍',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '龍鼓灘',
  '龍鼓灘',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西北';

-- New Territories North West - 元朗區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '元朗區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '元朗',
  '元朗',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '天水圍',
  '天水圍',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '洪水橋',
  '洪水橋',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '錦田',
  '錦田',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界西北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '八鄉',
  '八鄉',
  NULL,
  80
FROM constituencies WHERE name_zh = '新界西北';

-- New Territories North East (新界東北) - 北區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '北區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '上水',
  '上水',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '粉嶺',
  '粉嶺',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '沙頭角',
  '沙頭角',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東北';

-- New Territories North East - 大埔區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大埔區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大埔',
  '大埔',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '太和',
  '太和',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東北';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大埔墟',
  '大埔墟',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東北';

-- New Territories South East (新界東南) - 沙田區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '沙田區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '沙田',
  '沙田',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '火炭',
  '火炭',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '馬鞍山',
  '馬鞍山',
  NULL,
  90
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '大圍',
  '大圍',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東南';

-- New Territories South East - 西貢區
INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '西貢區',
  NULL,
  NULL,
  100
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '西貢',
  '西貢',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '將軍澳',
  '將軍澳',
  NULL,
  95
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '坑口',
  '坑口',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '調景嶺',
  '調景嶺',
  NULL,
  85
FROM constituencies WHERE name_zh = '新界東南';

INSERT INTO address_mappings (constituency_id, district, landmark_name, street_pattern, priority)
SELECT 
  id,
  '寶林',
  '寶林',
  NULL,
  80
FROM constituencies WHERE name_zh = '新界東南';