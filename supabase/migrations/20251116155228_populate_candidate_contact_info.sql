/*
  # Populate Candidate Contact Information
  
  ## Overview
  This migration populates missing email addresses and websites for all candidates
  in the 2025 Hong Kong Legislative Council Election. The data comes from official
  election commission sources.
  
  ## Changes
  - Update `email` field for 50 candidates with official email addresses
  - Update `website` field for candidates who have provided official websites
  - Note: "/" values in source data indicate no website provided (set to NULL)
  
  ## Data Source
  Official candidate information from the Electoral Affairs Commission
  
  ## Important Notes
  - Email addresses are contact points provided by candidates themselves
  - Website URLs include Facebook pages and official campaign sites
  - All updates match candidates by Chinese name (name_zh) and constituency (constituency_zh)
  - Preserves existing electoral_message data (already populated)
*/

-- 香港島東 (Hong Kong Island East)
UPDATE candidates SET email = 'ngchaupei2025@gmail.com', website = NULL WHERE name_zh = '吳秋北' AND constituency_zh = '香港島東';
UPDATE candidates SET email = 'elainechikoffice@gmail.com', website = 'https://www.facebook.com/ElaineKLChik' WHERE name_zh = '植潔鈴' AND constituency_zh = '香港島東';
UPDATE candidates SET email = 'election.calvin@npp.org.hk', website = 'elections.npp.org.hk' WHERE name_zh = '郭浩景' AND constituency_zh = '香港島東';
UPDATE candidates SET email = 'kennyyuen.dc@gmail.com', website = 'facebook.com/kennyuen.dc' WHERE name_zh = '阮建中' AND constituency_zh = '香港島東';
UPDATE candidates SET email = 'annielee1479@yahoo.com.hk', website = NULL WHERE name_zh = '李清霞' AND constituency_zh = '香港島東';

-- 香港島西 (Hong Kong Island West)
UPDATE candidates SET email = 'youngchiton@gmail.com', website = NULL WHERE name_zh = '楊哲安' AND constituency_zh = '香港島西';
UPDATE candidates SET email = 'election.judy@npp.org.hk', website = 'elections.npp.org.hk' WHERE name_zh = '陳家珮' AND constituency_zh = '香港島西';
UPDATE candidates SET email = 'wongchaupingjoyce2025@gmail.com', website = 'https://www.facebook.com/wongchauping2025' WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';
UPDATE candidates SET email = 'hfchan@dab.org.hk', website = 'www.electionsdab.hk' WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';
UPDATE candidates SET email = 'KwokWaiKeungOffice@gmail.com', website = NULL WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

-- 九龍東 (Kowloon East)
UPDATE candidates SET email = 'ftuke.legco2025@gmail.com', website = NULL WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';
UPDATE candidates SET email = 'cheungpuikong2025@gmail.com', website = NULL WHERE name_zh = '張培剛' AND constituency_zh = '九龍東';
UPDATE candidates SET email = 'frankiengan2025@gmail.com', website = NULL WHERE name_zh = '顏汶羽' AND constituency_zh = '九龍東';
UPDATE candidates SET email = 'jeffrey.chanchunhung@gmail.com', website = NULL WHERE name_zh = '陳進雄' AND constituency_zh = '九龍東';
UPDATE candidates SET email = 'lsw.renee@gmail.com', website = NULL WHERE name_zh = '梁思韻' AND constituency_zh = '九龍東';

-- 九龍西 (Kowloon West)
UPDATE candidates SET email = 'haywoodklnwest2025@gmail.com', website = 'Facebook: 關煒曦Haywood' WHERE name_zh = '關煒曦' AND constituency_zh = '九龍西';
UPDATE candidates SET email = 'oiszelau@gmail.com', website = NULL WHERE name_zh = '劉愛詩' AND constituency_zh = '九龍西';
UPDATE candidates SET email = 'scottleung2025@gmail.com', website = 'www.mankwong.info' WHERE name_zh = '梁文廣' AND constituency_zh = '九龍西';
UPDATE candidates SET email = 'ponglegco25@gmail.com', website = NULL WHERE name_zh = '龐朝輝' AND constituency_zh = '九龍西';
UPDATE candidates SET email = 'vincentcheng@dab.org.hk', website = 'https://www.electionsdab.hk' WHERE name_zh = '鄭泳舜' AND constituency_zh = '九龍西';

-- 九龍中 (Kowloon Central)
UPDATE candidates SET email = 'leechiuyu2025@gmail.com', website = NULL WHERE name_zh = '李超宇' AND constituency_zh = '九龍中';
UPDATE candidates SET email = 'yeungnokhin.leo@gmail.com', website = NULL WHERE name_zh = '楊諾軒' AND constituency_zh = '九龍中';
UPDATE candidates SET email = 'wingkityang2025@gmail.com', website = 'https://www.facebook.com/kitsonyangpage' WHERE name_zh = '楊永杰' AND constituency_zh = '九龍中';
UPDATE candidates SET email = 'starrylee2025lc@gmail.com', website = 'https://www.electionsdab.hk/' WHERE name_zh = '李慧琼' AND constituency_zh = '九龍中';
UPDATE candidates SET email = 'ysyauoffice@gmail.com', website = NULL WHERE name_zh = '丘燿誠' AND constituency_zh = '九龍中';
UPDATE candidates SET email = 'tammytamlyee@gmail.com', website = NULL WHERE name_zh = '譚莉儀' AND constituency_zh = '九龍中';

-- 新界東南 (New Territories South East)
UPDATE candidates SET email = 'saikung@dab.org.hk', website = 'www.electionsdab.hk' WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';
UPDATE candidates SET email = 'leechingyeejanet@gmail.com', website = NULL WHERE name_zh = '李貞儀' AND constituency_zh = '新界東南';
UPDATE candidates SET email = 'info@christinefong.com', website = 'facebook.com/christinefks.page' WHERE name_zh = '方國珊' AND constituency_zh = '新界東南';
UPDATE candidates SET email = 'chrischeung_lohas@yahoo.com.hk', website = 'Facebook:cheungmeihung' WHERE name_zh = '張美雄' AND constituency_zh = '新界東南';
UPDATE candidates SET email = 'election.victor@npp.org.hk', website = NULL WHERE name_zh = '陳志豪' AND constituency_zh = '新界東南';

-- 新界北 (New Territories North)
UPDATE candidates SET email = 'kazaftam.ntas@gmail.com', website = 'https://cktam.hk/' WHERE name_zh = '譚鎮國' AND constituency_zh = '新界北';
UPDATE candidates SET email = 'kent.tsangkc@gmail.com', website = NULL WHERE name_zh = '曾勁聰' AND constituency_zh = '新界北';
UPDATE candidates SET email = 'Wilshum2025lce@gmail.com', website = 'https://www.facebook.com/share/1KSYwZyG2b/?mibextid=wwXIfr' WHERE name_zh = '沈豪傑' AND constituency_zh = '新界北';
UPDATE candidates SET email = 'michaeltcliu@gmail.com', website = 'elections.npp.org.hk' WHERE name_zh = '廖子聰' AND constituency_zh = '新界北';
UPDATE candidates SET email = 'dabnorth@dab.org.hk', website = 'https://www.electionsdab.hk/' WHERE name_zh = '姚銘' AND constituency_zh = '新界北';

-- 新界西北 (New Territories North West)
UPDATE candidates SET email = 'holdenchow@hotmail.com.hk', website = 'www.electionsdab.hk' WHERE name_zh = '周浩鼎' AND constituency_zh = '新界西北';
UPDATE candidates SET email = 'mark.chong@michaeltien.hk', website = 'https://www.facebook.com/Mark.chonghf/' WHERE name_zh = '莊豪鋒' AND constituency_zh = '新界西北';
UPDATE candidates SET email = 'leungmingkin2025@gmail.com', website = NULL WHERE name_zh = '梁明堅' AND constituency_zh = '新界西北';
UPDATE candidates SET email = 'election.manfung@npp.org.hk', website = 'elections.npp.org.hk' WHERE name_zh = '甘文鋒' AND constituency_zh = '新界西北';
UPDATE candidates SET email = '2025ftu.michael.luk@gmail.com', website = 'www.facebook.com/michael.luk.ftu' WHERE name_zh = '陸頌雄' AND constituency_zh = '新界西北';

-- 新界西南 (New Territories South West)
UPDATE candidates SET email = 'KTDCLOYUENTING@GMAIL.COM', website = 'https://www.facebook.com/loyuenting1/' WHERE name_zh = '盧婉婷' AND constituency_zh = '新界西南';
UPDATE candidates SET email = 'dabtw@dab.org.hk', website = 'https://www.electionsdab.hk/' WHERE name_zh = '郭芙蓉' AND constituency_zh = '新界西南';
UPDATE candidates SET email = '20251207ftujoephychan@gmail.com', website = NULL WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';
UPDATE candidates SET email = 'election.marcella@npp.org.hk', website = 'elections.npp.org.hk' WHERE name_zh = '張文嘉' AND constituency_zh = '新界西南';
UPDATE candidates SET email = 'mokyeekioffice@gmail.com', website = 'https://www.facebook.com/myk.ariel/' WHERE name_zh = '莫綺琪' AND constituency_zh = '新界西南';

-- 新界東北 (New Territories North East)
UPDATE candidates SET email = 'garychk@dab.org.hk', website = NULL WHERE name_zh = '陳克勤' AND constituency_zh = '新界東北';
UPDATE candidates SET email = 'dominicelection2025@gmail.com', website = 'fb.com/leetszking' WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';
UPDATE candidates SET email = 'allanwong2025lce@gmail.com', website = 'https://www.facebook.com/AllanWongWingHo' WHERE name_zh = '黃頴灝' AND constituency_zh = '新界東北';
UPDATE candidates SET email = 'kuwaipingoffice@gmail.com', website = NULL WHERE name_zh = '古偉冰' AND constituency_zh = '新界東北';
UPDATE candidates SET email = 'calvintang.office@gmail.com', website = NULL WHERE name_zh = '鄧肇峰' AND constituency_zh = '新界東北';
