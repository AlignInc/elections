/*
  # Populate Candidate Policies - Part 2

  ## Overview
  This is Part 2, covering New Territories South East, New Territories North,
  New Territories North West, New Territories South West, and New Territories North East
  constituencies (25 candidates).

  ## Changes
  - Extract and structure policy content from electoral messages
  - Create individual policy records for each candidate's policy points
  - Link policies to candidates using candidate_id
  - Set last_updated to 2025-11-11 (data extraction date)

  ## Data Source
  Official electoral messages from the Electoral Affairs Commission
*/

-- New Territories South East - 葉傲冬
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動東九龍延線延伸', '推動東九龍延線延伸，改善將軍澳交通', '2025-11-11'
FROM candidates WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '強化海濱防風防浪', '強化將軍澳海濱防風防浪措施，加快落實將軍澳水上活動中心', '2025-11-11'
FROM candidates WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '監督公眾街市工程', '監督將軍澳公眾街市工程進度，倡議設立「兒童醫療券」', '2025-11-11'
FROM candidates WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '打擊外傭不負責任借貸', '加強打擊外傭不負責任借貸行為，保障僱主權益', '2025-11-11'
FROM candidates WHERE name_zh = '葉傲冬' AND constituency_zh = '新界東南';

-- New Territories South East - 李貞儀
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '打造無障礙社區', '全心服務打造無障礙社區，加強社區連繫', '2025-11-11'
FROM candidates WHERE name_zh = '李貞儀' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '共築理想安樂窩', '全情投入共築理想安樂窩，拼搏民生專業議政', '2025-11-11'
FROM candidates WHERE name_zh = '李貞儀' AND constituency_zh = '新界東南';

-- New Territories South East - 方國珊
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '安居關懷要細心', '安居關懷要細心，交通便民要專心', '2025-11-11'
FROM candidates WHERE name_zh = '方國珊' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '社區規劃要用心', '社區規劃要用心，人寵共融常在我心', '2025-11-11'
FROM candidates WHERE name_zh = '方國珊' AND constituency_zh = '新界東南';

-- New Territories South East - 張美雄
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動將軍澳街市落成', '推動將軍澳公營街市早日落成，促西貢體育館興建', '2025-11-11'
FROM candidates WHERE name_zh = '張美雄' AND constituency_zh = '新界東南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善將軍澳交通', '加密港鐵班次，爭取東九龍綫設康盛翠林站', '2025-11-11'
FROM candidates WHERE name_zh = '張美雄' AND constituency_zh = '新界東南';

-- New Territories South East - 陳志豪
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為市民謀福祉', '為市民謀福祉，為香港謀發展', '2025-11-11'
FROM candidates WHERE name_zh = '陳志豪' AND constituency_zh = '新界東南';

-- New Territories North - 譚鎮國
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提速北都為你增值', '經濟增值、基建增值、就業增值、配套增值、資源增值、社福增值、青年增值，全面推動北部都會區發展', '2025-11-11'
FROM candidates WHERE name_zh = '譚鎮國' AND constituency_zh = '新界北';

-- New Territories North - 曾勁聰
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '深耕北都落實藍圖', '積極推動康樂設施、交通網絡、醫療資源及社福設施全面提升', '2025-11-11'
FROM candidates WHERE name_zh = '曾勁聰' AND constituency_zh = '新界北';

-- New Territories North - 沈豪傑
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提升北都發展速度', '全面提升北部都會區(元朗及北區)發展速度', '2025-11-11'
FROM candidates WHERE name_zh = '沈豪傑' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '優化新界北教育配套', '全面優化新界北教育配套，改善新界北醫療設施', '2025-11-11'
FROM candidates WHERE name_zh = '沈豪傑' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '建設關愛安全社區', '全面建設關愛安全社區', '2025-11-11'
FROM candidates WHERE name_zh = '沈豪傑' AND constituency_zh = '新界北';

-- New Territories North - 廖子聰
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '堅守堅持貢獻', '延續區議員工作，堅守、堅持、貢獻社區', '2025-11-11'
FROM candidates WHERE name_zh = '廖子聰' AND constituency_zh = '新界北';

-- New Territories North - 姚銘
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '幸福北都', '北環線建設再提速，繼續完善交通規劃，解決職住不均問題', '2025-11-11'
FROM candidates WHERE name_zh = '姚銘' AND constituency_zh = '新界北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '豐富北都教育娛樂', '豐富區內學校選擇，建設綠色文娛北都', '2025-11-11'
FROM candidates WHERE name_zh = '姚銘' AND constituency_zh = '新界北';

-- New Territories North West - 周浩鼎
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '守護家庭核心價值', '守護家庭核心價值，推動家庭友善政策', '2025-11-11'
FROM candidates WHERE name_zh = '周浩鼎' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '原區就業多元經濟', '推動原區就業，發展多元經濟', '2025-11-11'
FROM candidates WHERE name_zh = '周浩鼎' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '背靠祖國聯通世界', '背靠祖國聯通世界，把握發展機遇', '2025-11-11'
FROM candidates WHERE name_zh = '周浩鼎' AND constituency_zh = '新界西北';

-- New Territories North West - 莊豪鋒
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '理性敢言為無聲者發聲', '傳承圓桌理性敢言聲音，企硬為無聲者發聲', '2025-11-11'
FROM candidates WHERE name_zh = '莊豪鋒' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '爭取交通配套', '爭取新界西北的交通配套，監察港鐵及兩巴營運暢順', '2025-11-11'
FROM candidates WHERE name_zh = '莊豪鋒' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '監察政府善用公帑', '監察政府善用公帑，關注醫療安全', '2025-11-11'
FROM candidates WHERE name_zh = '莊豪鋒' AND constituency_zh = '新界西北';

-- New Territories North West - 梁明堅
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提高屯元生活質素', '提高屯元生活質素，改善康樂及娛樂配套', '2025-11-11'
FROM candidates WHERE name_zh = '梁明堅' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '加強醫療教育設施', '加強醫療及教育設施，城鄉居民得到生活保障', '2025-11-11'
FROM candidates WHERE name_zh = '梁明堅' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '發揮漁農新質生產力', '發揮漁農新質生產力，推動生態環境寵物保護', '2025-11-11'
FROM candidates WHERE name_zh = '梁明堅' AND constituency_zh = '新界西北';

-- New Territories North West - 甘文鋒
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '扎根社區專業論政', '扎根社區，以專業態度論政', '2025-11-11'
FROM candidates WHERE name_zh = '甘文鋒' AND constituency_zh = '新界西北';

-- New Territories North West - 陸頌雄
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '大屯元大西北', '「大屯元大西北」，為屯門元朗迎來發展新高度', '2025-11-11'
FROM candidates WHERE name_zh = '陸頌雄' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障創造就業', '保障就業、創造就業、發展人才', '2025-11-11'
FROM candidates WHERE name_zh = '陸頌雄' AND constituency_zh = '新界西北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '團結各方共同發展', '團結各方，讓屯門元朗發展能站得更高，市民能望得更遠', '2025-11-11'
FROM candidates WHERE name_zh = '陸頌雄' AND constituency_zh = '新界西北';

-- New Territories South West - 盧婉婷
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保就業促安居', '保就業、促安居、強醫療、暢交通', '2025-11-11'
FROM candidates WHERE name_zh = '盧婉婷' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '優居住通無障', '優居住、通無障、援弱勢、安晚年', '2025-11-11'
FROM candidates WHERE name_zh = '盧婉婷' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '助育兒護權益', '助育兒、護權益，全面關顧市民需要', '2025-11-11'
FROM candidates WHERE name_zh = '盧婉婷' AND constituency_zh = '新界西南';

-- New Territories South West - 郭芙蓉
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '宜居煥新安居樂業', '宜居煥新，安居樂業；關愛共融，弱有所依', '2025-11-11'
FROM candidates WHERE name_zh = '郭芙蓉' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '活力經濟希望傳承', '活力經濟，多元機遇；希望傳承，投資未來', '2025-11-11'
FROM candidates WHERE name_zh = '郭芙蓉' AND constituency_zh = '新界西南';

-- New Territories South West - 陳穎欣
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保本地就業人人有工開', '保本地就業，人人有工開', '2025-11-11'
FROM candidates WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '落實中鐵綫路通惠民生', '落實中鐵綫，路通惠民生', '2025-11-11'
FROM candidates WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '住屋可負擔青年向上流', '住屋可負擔，青年向上流', '2025-11-11'
FROM candidates WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '促醫療改革倡好藥港用', '促醫療改革，倡好藥港用', '2025-11-11'
FROM candidates WHERE name_zh = '陳穎欣' AND constituency_zh = '新界西南';

-- New Territories South West - 張文嘉
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '香港新機遇你我共參與', '以臨床生物化學博士專業背景，把握香港新機遇', '2025-11-11'
FROM candidates WHERE name_zh = '張文嘉' AND constituency_zh = '新界西南';

-- New Territories South West - 莫綺琪
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '改善基層青年四業問題', '體驗基層青年在學業、就業、創業同置業上的問題，拓展年青人的發展平台', '2025-11-11'
FROM candidates WHERE name_zh = '莫綺琪' AND constituency_zh = '新界西南';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '支援中小企業', '改善夾心階層同埋中小企業嘅困難，善用經民聯豐富的人脈及工商專業力量，改善經濟民生', '2025-11-11'
FROM candidates WHERE name_zh = '莫綺琪' AND constituency_zh = '新界西南';

-- New Territories North East - 陳克勤
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提升地區醫療服務', '提升地區醫療服務，改善大埔沙田醫療配套', '2025-11-11'
FROM candidates WHERE name_zh = '陳克勤' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障本地勞工就業', '保障本地勞工就業，完善住房置業階梯', '2025-11-11'
FROM candidates WHERE name_zh = '陳克勤' AND constituency_zh = '新界東北';

-- New Territories North East - 李梓敬
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障本地勞工優先就業', '保障本地勞工優先就業，重推消費券刺激本港經濟', '2025-11-11'
FROM candidates WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '優化免遣返聲請', '優化免遣返聲請，杜絕假難民', '2025-11-11'
FROM candidates WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '重推租者置其屋計劃', '重推租者置其屋計劃，協助市民置業', '2025-11-11'
FROM candidates WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '爭取沙田大埔基建', '爭取提早開展並完成：白石角港鐵站、沙田繞道、獅子山隧道擴建工程，爭取更多沙田大埔直達口岸巴士', '2025-11-11'
FROM candidates WHERE name_zh = '李梓敬' AND constituency_zh = '新界東北';

-- New Territories North East - 黃頴灝
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '加快交通革新打造高效連接', '加快交通革新，打造高效連接；推動綠色轉型，建設海綿城市', '2025-11-11'
FROM candidates WHERE name_zh = '黃頴灝' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '發展創新經濟', '發展創新經濟，培育未來產業；改善房屋供應，推動社區發展', '2025-11-11'
FROM candidates WHERE name_zh = '黃頴灝' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提升教育強化醫療', '提升教育質素，培養優秀人才；強化醫療服務，完善福利體系', '2025-11-11'
FROM candidates WHERE name_zh = '黃頴灝' AND constituency_zh = '新界東北';

-- New Territories North East - 古偉冰
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障就業優化醫療', '積極推動保障就業、交通網絡發展規劃、優化醫療資源配置、社福設施全面提升', '2025-11-11'
FROM candidates WHERE name_zh = '古偉冰' AND constituency_zh = '新界東北';

-- New Territories North East - 鄧肇峰
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '完善交通網絡便利出行', '完善交通網絡，便利出行；落實基建升級，樂業安居', '2025-11-11'
FROM candidates WHERE name_zh = '鄧肇峰' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '確立房屋保障', '確立房屋保障，住有其所；發展科技護老，關愛長者', '2025-11-11'
FROM candidates WHERE name_zh = '鄧肇峰' AND constituency_zh = '新界東北';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '賦能青年規劃綠色城市', '賦能青年參與，推動經濟；規劃綠色城市，生態產業', '2025-11-11'
FROM candidates WHERE name_zh = '鄧肇峰' AND constituency_zh = '新界東北';
