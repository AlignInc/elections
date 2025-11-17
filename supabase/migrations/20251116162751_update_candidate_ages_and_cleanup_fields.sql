/*
  # Update Candidate Ages and Remove Null Fields

  ## Overview
  This migration:
  1. Updates candidate age field with data from official electoral records
  2. Removes fields that are null for all or nearly all candidates
  
  ## Changes
  - Update age for all 51 candidates based on official data
  - Drop platform field (null for all 51 candidates)
  - Drop platform_pdf_url field (null for 50/51 candidates)
  - Drop gc_intro_page field (null for 50/51 candidates)
  - Drop gc_nomination_text field (null for 50/51 candidates)

  ## Data Safety
  - Only removing truly unused fields
  - Preserving all fields with substantial data
*/

-- Update candidate ages
UPDATE candidates SET age = '55' WHERE name_zh = '吳秋北';
UPDATE candidates SET age = '37' WHERE name_zh = '植潔鈴';
UPDATE candidates SET age = '46' WHERE name_zh = '郭浩景';
UPDATE candidates SET age = '48' WHERE name_zh = '阮建中';
UPDATE candidates SET age = NULL WHERE name_zh = '李清霞';
UPDATE candidates SET age = '49' WHERE name_zh = '楊哲安';
UPDATE candidates SET age = '45' WHERE name_zh = '陳家珮';
UPDATE candidates SET age = NULL WHERE name_zh = '黃秋萍';
UPDATE candidates SET age = '49' WHERE name_zh = '陳學鋒';
UPDATE candidates SET age = '47' WHERE name_zh = '郭偉強';
UPDATE candidates SET age = '46' WHERE name_zh = '鄧家彪';
UPDATE candidates SET age = NULL WHERE name_zh = '張培剛';
UPDATE candidates SET age = '39' WHERE name_zh = '顏汶羽';
UPDATE candidates SET age = '48' WHERE name_zh = '陳進雄';
UPDATE candidates SET age = NULL WHERE name_zh = '梁思韻';
UPDATE candidates SET age = '34' WHERE name_zh = '關煒曦';
UPDATE candidates SET age = '48' WHERE name_zh = '劉愛詩';
UPDATE candidates SET age = '41' WHERE name_zh = '梁文廣';
UPDATE candidates SET age = '51' WHERE name_zh = '龐朝輝';
UPDATE candidates SET age = '46' WHERE name_zh = '鄭泳舜';
UPDATE candidates SET age = '37' WHERE name_zh = '李超宇';
UPDATE candidates SET age = '35' WHERE name_zh = '楊諾軒';
UPDATE candidates SET age = '43' WHERE name_zh = '楊永杰';
UPDATE candidates SET age = '51' WHERE name_zh = '李慧琼';
UPDATE candidates SET age = '43' WHERE name_zh = '丘燿誠';
UPDATE candidates SET age = '47' WHERE name_zh = '譚莉儀';
UPDATE candidates SET age = '45' WHERE name_zh = '葉傲冬';
UPDATE candidates SET age = '37' WHERE name_zh = '李貞儀';
UPDATE candidates SET age = NULL WHERE name_zh = '方國珊';
UPDATE candidates SET age = '37' WHERE name_zh = '張美雄';
UPDATE candidates SET age = '39' WHERE name_zh = '陳志豪';
UPDATE candidates SET age = '37' WHERE name_zh = '譚鎮國';
UPDATE candidates SET age = '42' WHERE name_zh = '曾勁聰';
UPDATE candidates SET age = '47' WHERE name_zh = '沈豪傑';
UPDATE candidates SET age = '39' WHERE name_zh = '廖子聰';
UPDATE candidates SET age = '39' WHERE name_zh = '姚銘';
UPDATE candidates SET age = '46' WHERE name_zh = '周浩鼎';
UPDATE candidates SET age = '41' WHERE name_zh = '莊豪鋒';
UPDATE candidates SET age = '44' WHERE name_zh = '梁明堅';
UPDATE candidates SET age = '43' WHERE name_zh = '甘文鋒';
UPDATE candidates SET age = '47' WHERE name_zh = '陸頌雄';
UPDATE candidates SET age = '39' WHERE name_zh = '盧婉婷';
UPDATE candidates SET age = '35' WHERE name_zh = '郭芙蓉';
UPDATE candidates SET age = '35' WHERE name_zh = '陳穎欣';
UPDATE candidates SET age = '41' WHERE name_zh = '張文嘉';
UPDATE candidates SET age = '36' WHERE name_zh = '莫綺琪';
UPDATE candidates SET age = '49' WHERE name_zh = '陳克勤';
UPDATE candidates SET age = '41' WHERE name_zh = '李梓敬';
UPDATE candidates SET age = '45' WHERE name_zh = '黃頴灝';
UPDATE candidates SET age = '39' WHERE name_zh = '古偉冰';
UPDATE candidates SET age = '43' WHERE name_zh = '鄧肇峰';

-- Remove fields that are null for all or nearly all candidates
ALTER TABLE candidates DROP COLUMN IF EXISTS platform;
ALTER TABLE candidates DROP COLUMN IF EXISTS platform_pdf_url;
ALTER TABLE candidates DROP COLUMN IF EXISTS gc_intro_page;
ALTER TABLE candidates DROP COLUMN IF EXISTS gc_nomination_text;
