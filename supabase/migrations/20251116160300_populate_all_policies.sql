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

-- Hong Kong Island East - 吳秋北
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

-- Hong Kong Island East - 植潔鈴
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '傳承民建聯服務精神', '傳承民建聯為港島東服務的理念，延續梁熙議員的工作', '2025-11-11'
FROM candidates WHERE name_zh = '植潔鈴' AND constituency_zh = '香港島東';

-- Hong Kong Island East - 郭浩景
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '專業多元國際視野', '以金融計量分析專業背景，帶來專業、多元及國際視野的議政方式', '2025-11-11'
FROM candidates WHERE name_zh = '郭浩景' AND constituency_zh = '香港島東';

-- Hong Kong Island East - 阮建中
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '捍衛中產夾心階層', '為中產夾心階層爭取權益，關顧弱勢社群', '2025-11-11'
FROM candidates WHERE name_zh = '阮建中' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動青年向上流動', '創造青年向上流動機會，改善中小企營商環境', '2025-11-11'
FROM candidates WHERE name_zh = '阮建中' AND constituency_zh = '香港島東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '建設長者友善社區', '推動建設長者友善社區，加強政府部門協作', '2025-11-11'
FROM candidates WHERE name_zh = '阮建中' AND constituency_zh = '香港島東';

-- Hong Kong Island East - 李清霞
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '民生發展共融安全', '以民生、發展、共融、安全為四大政綱方針，拼搏實幹服務社區', '2025-11-11'
FROM candidates WHERE name_zh = '李清霞' AND constituency_zh = '香港島東';

-- Hong Kong Island West - 楊哲安
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '燃點中產希望', '維護國家安全，捍衛一國兩制，燃點中產希望，開拓夾心出路', '2025-11-11'
FROM candidates WHERE name_zh = '楊哲安' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動經濟轉型', '鞏固經濟支柱，提速經濟轉型，發展新興產業，助力青年就業', '2025-11-11'
FROM candidates WHERE name_zh = '楊哲安' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '培育多元人才', '整合教育資源，培育多元人才，愛護和睦家庭，堅持多元包容', '2025-11-11'
FROM candidates WHERE name_zh = '楊哲安' AND constituency_zh = '香港島西';

-- Hong Kong Island West - 陳家珮
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為國家為香港為未來', '延續立法會議員工作，為國家、為香港、為未來服務', '2025-11-11'
FROM candidates WHERE name_zh = '陳家珮' AND constituency_zh = '香港島西';

-- Hong Kong Island West - 黃秋萍
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '完善交通基建', '改善東涌社區配套，爭取南港島線(西段)盡快動工，完善交通基建', '2025-11-11'
FROM candidates WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動海島經濟發展', '推動海島經濟發展，促進經濟多元化', '2025-11-11'
FROM candidates WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '支持重推租置計劃', '支持重推租置計劃，協助公屋居民置業', '2025-11-11'
FROM candidates WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '維護女性權益推動尊老愛老', '維護女性權益，推動尊老愛老文化，共融發展', '2025-11-11'
FROM candidates WHERE name_zh = '黃秋萍' AND constituency_zh = '香港島西';

-- Hong Kong Island West - 陳學鋒
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '爭取重推租置2.0', '爭取盡快重推「租置2.0」計劃，讓公屋居民可購買單位', '2025-11-11'
FROM candidates WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動地區特色旅遊', '積極推動地區特色旅遊經濟，活化社區', '2025-11-11'
FROM candidates WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '建設環島海濱長廊', '持續推動建設環島海濱長廊，改善海濱設施', '2025-11-11'
FROM candidates WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推出樓宇更新大行動3.0', '爭取推出「樓宇更新大行動3.0」，協助舊樓維修保養', '2025-11-11'
FROM candidates WHERE name_zh = '陳學鋒' AND constituency_zh = '香港島西';

-- Hong Kong Island West - 郭偉強
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '促經濟保就業', '打擊黑工，推動外勞封頂機制，加強執法保障本地就業', '2025-11-11'
FROM candidates WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動東涌機場城市發展', '以機場城市理念推動東涌發展，加強海島旅遊業與保育均衡發展', '2025-11-11'
FROM candidates WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '監察南港島西段線', '監察南港島西段線走線規劃及進度，改善交通配套', '2025-11-11'
FROM candidates WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '完善大廈管理條例', '完善大廈管理條例，維護小業主權益', '2025-11-11'
FROM candidates WHERE name_zh = '郭偉強' AND constituency_zh = '香港島西';

-- Kowloon East - 鄧家彪
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '促進九龍東CBD2發展', '全面促進九龍東CBD2發展，創造就業機會', '2025-11-11'
FROM candidates WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '完善強積金制度', '持續完善強積金制度，加強退休保障', '2025-11-11'
FROM candidates WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '普及樂齡科技', '普及低成本樂齡科技，推動可負擔優質醫藥', '2025-11-11'
FROM candidates WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動東九過山線', '薪火相傳推動興建東九過山線，改善交通', '2025-11-11'
FROM candidates WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障消費者權益', '加強規管不良放債行為，推行預繳式消費冷靜期，關懷婦弱兒童', '2025-11-11'
FROM candidates WHERE name_zh = '鄧家彪' AND constituency_zh = '九龍東';

-- Kowloon East - 張培剛
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '保障本地勞工就業', '暫停高失業行業輸入外勞，保障本地勞工就業優先', '2025-11-11'
FROM candidates WHERE name_zh = '張培剛' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '重推出售公屋計劃', '重推出售公屋計劃，豁免首次置業者全數住宅印花稅', '2025-11-11'
FROM candidates WHERE name_zh = '張培剛' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '東九龍線盡快上馬', '爭取東九龍線盡快上馬，積極發展基層醫療', '2025-11-11'
FROM candidates WHERE name_zh = '張培剛' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '增加安老院舍宿位', '宣揚家庭友善，增加資助安老院舍宿位，加強網上巡邏', '2025-11-11'
FROM candidates WHERE name_zh = '張培剛' AND constituency_zh = '九龍東';

-- Kowloon East - 顏汶羽
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '踏實為民從不停步', '競選連任，延續為民服務，踏實為民從不停步', '2025-11-11'
FROM candidates WHERE name_zh = '顏汶羽' AND constituency_zh = '九龍東';

-- Kowloon East - 陳進雄
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '跑出新機遇', '為香港齊心跑出新機遇，踏出改變的一步', '2025-11-11'
FROM candidates WHERE name_zh = '陳進雄' AND constituency_zh = '九龍東';

-- Kowloon East - 梁思韻
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '激活九龍東拼經濟', '激活九龍東經濟，支援在職家庭', '2025-11-11'
FROM candidates WHERE name_zh = '梁思韻' AND constituency_zh = '九龍東';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '完善教育優化醫療', '完善教育系統，優化醫療服務', '2025-11-11'
FROM candidates WHERE name_zh = '梁思韻' AND constituency_zh = '九龍東';

-- Kowloon West - 關煒曦
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '重民生共連結穩經濟', '關顧勞工權益，為基層服務，支援家庭及家長', '2025-11-11'
FROM candidates WHERE name_zh = '關煒曦' AND constituency_zh = '九龍西';

-- Kowloon West - 劉愛詩
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '愛為民生敢創新', '以愛心服務民生，敢於創新求變', '2025-11-11'
FROM candidates WHERE name_zh = '劉愛詩' AND constituency_zh = '九龍西';

-- Kowloon West - 梁文廣
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '文廣為您想繼續拍住上', '競選連任，延續為九龍西服務', '2025-11-11'
FROM candidates WHERE name_zh = '梁文廣' AND constituency_zh = '九龍西';

-- Kowloon West - 龐朝輝
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為社區望聞問切', '以醫生專業背景為社區做好「望、聞、問、切」，專業服務九龍西', '2025-11-11'
FROM candidates WHERE name_zh = '龐朝輝' AND constituency_zh = '九龍西';

-- Kowloon West - 鄭泳舜
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '共築未來', '為社區築幸福、為居民築安樂窩、為下一代築夢想、為香港築未來', '2025-11-11'
FROM candidates WHERE name_zh = '鄭泳舜' AND constituency_zh = '九龍西';

-- Kowloon Central - 李超宇
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '應使則使應慳則慳', '適度提高現有免稅額，引入「體檢免稅額」，推出「強積金首次置業計劃」，引入官方的「創科大膽資本」', '2025-11-11'
FROM candidates WHERE name_zh = '李超宇' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '加強政府管理', '加強政府工程合約管理，打擊濫用政府資助的行為，進一步活化閒置公共資產，重新檢視政府部門架構', '2025-11-11'
FROM candidates WHERE name_zh = '李超宇' AND constituency_zh = '九龍中';

-- Kowloon Central - 楊諾軒
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '闖出新希望', '為東九龍帶來幸福感、成就感、歸屬感', '2025-11-11'
FROM candidates WHERE name_zh = '楊諾軒' AND constituency_zh = '九龍中';

-- Kowloon Central - 楊永杰
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '肯拼搏有實績', '以拼搏精神及實績服務九龍中', '2025-11-11'
FROM candidates WHERE name_zh = '楊永杰' AND constituency_zh = '九龍中';

-- Kowloon Central - 李慧琼
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '堅守初心跨越挑戰', '從政二十多年，堅守初心，跨越挑戰，見證國家好、香港好、大家好', '2025-11-11'
FROM candidates WHERE name_zh = '李慧琼' AND constituency_zh = '九龍中';

-- Kowloon Central - 丘燿誠
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '爭取九東過山線延伸', '爭取九東過山線延伸，持續協助舊屋邨滲水外牆剝落問題', '2025-11-11'
FROM candidates WHERE name_zh = '丘燿誠' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '推動市區重建', '推動市區重建及舊區更新，普及低成本樂齡科技', '2025-11-11'
FROM candidates WHERE name_zh = '丘燿誠' AND constituency_zh = '九龍中';

INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '提升婦女就業保障', '明確平台外送員僱傭關係，提升婦女就業保障，持續優化強積金制度', '2025-11-11'
FROM candidates WHERE name_zh = '丘燿誠' AND constituency_zh = '九龍中';

-- Kowloon Central - 譚莉儀
INSERT INTO policies (candidate_id, title, summary, last_updated)
SELECT id, '為市民福祉發聲', '不為利益團體代言，只為市民福祉發聲', '2025-11-11'
FROM candidates WHERE name_zh = '譚莉儀' AND constituency_zh = '九龍中';
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
