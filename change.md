# 語言結構調整方案（中英文完全分開）

需求摘要：

- 介面預設顯示繁體中文（zh-TW），英文（en）作為選項。
- 右上角提供語言切換器，可在「繁體中文 / English」之間切換。
- 切換語言後，介面文案只顯示該語言版本，不再中英夾雜（例如同一行同時出現中英）。
- 候選人姓名、選區名稱等資料欄位可保留中英並列（如 `name_zh`、`name_en`），但 UI 標題／說明文字要依語言切換。

技術實作方向（規劃，尚未修改程式碼）：

1. 全域語言狀態  
   - 在 `src/App.tsx` 新增 `language` 狀態：`'zh' | 'en'`，預設 `'zh'`。  
   - 建立 `LanguageContext` 或以 props 方式將 `language` 傳入各頁／元件。  
   - 提供 `setLanguage` 讓語言切換器可以更新狀態。

2. 右上角語言切換器  
   - 新增元件（暫名）：`src/components/LanguageToggle.tsx`。  
   - 樣式：固定在畫面右上角，內容為兩個按鈕或 Segmented Control：`繁體中文` / `English`。  
   - 行為：  
     - 點擊「繁體中文」→ `language = 'zh'`  
     - 點擊「English」→ `language = 'en'`  
     - 目前選中的語言高亮顯示。
   - 在 `App` 最外層 wrapper 中渲染此元件，確保所有頁面（包括候選人詳情）右上角都能看到切換器。

3. 文案結構調整原則  
   - 將目前「中英同時出現」的地方拆成依 `language` 切換的兩套字串：  
     - 例如：  
       - 標題：  
         - `language === 'zh' ? '投票日指南' : 'Voting Day Guide'`  
       - 說明：  
         - `language === 'zh' ? '完整的投票流程、所需文件及常見問題解答' : 'A complete guide to voting procedures, required documents, and FAQs.'`  
   - 不再在同一段落一次顯示中英（例如一行中文下一行英文）——改為同一位置依語言切換顯示其中一種。
   - 已存在的英文副標題／說明文字會被收斂為 `language === 'en'` 的版本，不會被刪除，只是不在中文模式下顯示。

4. 需支援語言切換的主要檔案（計畫覆蓋範圍）  
   - 頁面：  
     - `src/pages/ElectionHome.tsx`  
     - `src/pages/CandidateSearch.tsx`  
     - `src/pages/IssueSearch.tsx`  
     - `src/pages/LocationSearch.tsx`  
     - `src/pages/ConstituencyBrowse.tsx`  
     - `src/pages/VotingDayGuide.tsx`  
     - `src/pages/ElectionInfo.tsx`  
   - 元件：  
     - `src/components/CandidateDetail.tsx`（標題／區塊標籤等）  
     - `src/components/CandidateList.tsx`（小標說明文字）  
     - `src/components/VotingChecklist.tsx`（已內建中英文欄位，可改用 `language` 顯示其中一種）  
     - `src/components/VotingFAQ.tsx`（問答目前中英成對，改為依 `language` 顯示一種）  
     - `src/components/VotingSteps.tsx`（`title_zh`/`title_en`、`description_zh`/`description_en` 依語言切換）  
     - `src/components/SearchBar.tsx`（placeholder 可有中英文版本）  
   - 特別說明：  
     - `DocumentRequirements.tsx` 以官方原文為主，暫時只在繁體模式顯示；若未來需要英文版，可新增 `language === 'en'` 對應段落，並在 change log 註明與官方翻譯來源。

5. 現階段排程  
   - 本檔目前只記錄設計與文案切分原則，尚未實際修改任何 `.tsx` 檔案。  
   - 下一步（待你確認後執行）：  
     1. 在 `App.tsx` 實作 `language` 狀態與 `LanguageToggle`。  
     2. 逐頁將中英文文案改為依 `language` 切換顯示。  
     3. 完成後更新下方「文案潤色建議」區塊的進度與備註。

---

# 文案潤色建議（舊版紀錄，已根據需要執行）

以下按畫面/元件列出潤色建議。**目前狀態：除特別註明外，所有建議已套用到程式碼中 ✅。**

進度總覽：

- [x] `src/pages/ElectionHome.tsx`
- [x] `src/pages/CandidateSearch.tsx`
- [x] `src/pages/IssueSearch.tsx`
- [x] `src/pages/LocationSearch.tsx`
- [x] `src/pages/ConstituencyBrowse.tsx`
- [x] `src/components/CandidateList.tsx`
- [x] `src/components/CandidateDetail.tsx`
- [x] `src/components/DocumentRequirements.tsx`（僅檢視，保持官方原文）
- [x] `src/components/VotingSteps.tsx`
- [x] `src/components/VotingChecklist.tsx`
- [x] `src/components/VotingFAQ.tsx`
- [x] `src/pages/VotingDayGuide.tsx`
- [x] `src/pages/ElectionInfo.tsx`
- [x] `src/services/searchService.ts`
- [x] `src/lib/supabase.ts`

---

## `src/pages/ElectionHome.tsx`

- 行 52：「投入選舉 共創未來」  
  建議：改為「投入選舉，共創未來」加上逗號，讀起來更順。

- 行 58：「匯集2025年立法會換屆選舉資訊，助你輕鬆查找候選人、比較政綱立場、了解投票流程，讓你的選票更有意義。」  
  建議：  
  - 「換屆選舉」可視需要改為「換屆立法會選舉」以減少歧義。  
  - 可優化為「匯集2025年立法會換屆選舉資訊，助你輕鬆查找候選人、比較政綱立場、了解投票流程，讓每一票更有意義。」句尾更口語。

- 行 86：「關於本資料」  
  建議：改為「關於本系統」或「關於本平台」，更符合整體說明內容。

- 行 109：「本系統整合2025年立法會換屆選舉地方選區所有51位直選候選人的基本資料及政綱」  
  建議：  
  - 在「地方選區」前加「立法會」以呼應前文：「本系統整合2025年立法會換屆選舉地方選區全部 51 位直選候選人的基本資料及政綱。」  
  - ，閱讀感更好。按三個選舉界別拆開如下：

⸻

1️⃣ 地方選區（Geographical Constituencies, GC）
	•	候選人：51 人
	•	議席：20 席，分佈在 10 個地方選區（每區 2 席，雙議席單票制） ￼

2️⃣ 功能界別（Functional Constituencies, FC）
	•	候選人：60 人
	•	議席：30 席，來自 28 個功能界別（其中「勞工界」3 席，其餘大多數是 1 席） ￼

3️⃣ 選舉委員會界別（Election Committee Constituency, ECC）
	•	候選人：50 人
	•	議席：40 席，由 1,500 名選委用「全票制」投出 40 人當選。 ￼

- 行 118：「如有疑問，請以官方公布資料為準」  
  建議：改為「如有疑問，請以官方公布的資料為準。」（補「的」及句號）。

---

## `src/pages/CandidateSearch.tsx`

- 多處錯誤提示「搜索失敗，請稍後再試」  
  建議：將「搜索」統一為「搜尋」，與其他「搜尋候選人」等用語保持一致，例如改為「搜尋失敗，請稍後再試」。

- 地址錯誤提示：「找不到對應選區，請嘗試輸入更具體的地址（例如：銅鑼灣、中環、深水埗）」  
  建議：  
  - 可改為「找不到對應選區，請嘗試輸入更具體的地址（例如：銅鑼灣、中環、深水埗等）。」  
  - 加上「等」和句號，語氣更完整。

- 姓名搜尋 placeholder：「例如：李慧琼、吳秋北、Starry LEE」  
  建議：英文姓名大小寫可統一，改為「Starry Lee」較自然。

- 搜尋結果標題：「搜索結果（共 {candidates.length} 位）」  
  建議：改為「搜尋結果（共 {candidates.length} 位）」以用詞統一。

- 無結果提示：「找不到相關候選人，請嘗試使用不同的關鍵詞」  
  建議：可改為「找不到相關候選人，請嘗試使用其他關鍵詞。」加句號，語氣略為正式。

---

## `src/pages/IssueSearch.tsx`

- 主標題：「按議題關鍵詞查政策」  
  建議：改為「按議題關鍵詞查找政綱」或「按議題關鍵詞搜尋政綱」，與「政綱」一詞保持一致。

- 說明文：「輸入關心的議題，找出相關候選人的政綱內容」  
  建議：改為「輸入你關心的議題，找出相關候選人的政綱內容。」（補「你」及句號）。

- 輸入提示：「請輸入關鍵詞或選擇至少一個議題標籤」  
  建議：句尾加句號：「請輸入關鍵詞或選擇至少一個議題標籤。」

- 搜尋按鈕文字：「搜索政綱」、「搜索中...」  
  建議：統一為「搜尋政綱」、「搜尋中...」。

- 錯誤提示：「搜索失敗，請稍後再試」  
  建議：改為「搜尋失敗，請稍後再試。」並補句號。

- 無結果區塊：「沒有找到相關政綱內容」「請嘗試使用不同的關鍵詞或議題標籤」  
  建議：兩句均可補句號；另外可稍微口語化為「未找到相關政綱內容，請嘗試使用不同的關鍵詞或議題標籤。」

- 「你所在選區」標題  
  建議：可改為「你所屬選區」，更貼近日常用法。

- `searchService.getDisclaimer()` 返回文字：「結果僅展示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的推薦或評價。」  
  建議：視風格可改為「結果僅顯示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的建議或評價。」將「展示」改「顯示」，「推薦」改「建議」較中性。

---

## `src/pages/LocationSearch.tsx`

- 提示文字：「需要使用你的定位，以查找對應選區及候選人。亦可手動輸入地址。」  
  建議：改為「本功能需要使用你的定位，以查找對應選區及候選人，亦可選擇手動輸入地址。」句子更連貫。

- 多處錯誤訊息：「搜索失敗。請檢查網絡連接或嘗試輸入地區名稱（例如：太古城、銅鑼灣）」  
  建議：  
  - 「搜索」改為「搜尋」。  
  - 「網絡」可改為「網絡連線」或「網絡連接」統一為「連接」。例如：「搜尋失敗。請檢查網絡連接，或嘗試輸入地區名稱（例如：太古城、銅鑼灣）。」

- 藍框提示：「使用定位或輸入地址，查找你所屬選區的候選人資訊」  
  建議：可改為「使用定位或輸入地址，查找你所屬選區的候選人資料。」用「資料」與其他頁一致。

---

## `src/pages/ConstituencyBrowse.tsx`

- 「按選區瀏覽候選人」  
  建議：可改為「按選區瀏覽候選人資料」，與下方描述呼應。

- 「選擇具體選區，瀏覽該選區所有候選人的詳細資料」  
  建議：略為簡化：「選擇具體選區，瀏覽該選區所有候選人的詳細資料。」（僅補句號即可，文案已很順）。

- 「此類型暫無選區資料」  
  建議：可改為「此類型暫未有選區資料。」語氣較柔和。

- 「本選區暫無候選人資料」  
  建議：可改為「本選區暫未有候選人資料。」同上。

---

## `src/components/CandidateList.tsx`

- 小標：「{constituencyCandidates.length} 位候選人」  
  建議：若想更口語，可改為「共 {constituencyCandidates.length} 位候選人」，視覺上更清晰。

- 候選人簡短描述：「{candidate.affiliation || '獨立'} {candidate.occupation ? `· ${candidate.occupation}` : ''}」  
  建議：  
  - 「獨立」可改為「獨立候選人」，更明確。  
  - 若想避免中間的空白＋點號混雜，可改為「{candidate.affiliation || '獨立候選人'}{candidate.occupation ? `｜${candidate.occupation}` : ''}」，視覺上更工整。

---

## `src/components/CandidateDetail.tsx`

- 分享文字：  
  - 「政治聯繫：${... || '獨立候選人'}」  
    建議：「政治聯繫」可改為「政治聯繫／所屬團體」或單純「政治背景」，視你對中立度的要求。  
  - 「分享功能暫時無法使用」  
    建議：改為「分享功能暫時無法使用，請稍後再試。」語氣更完整。

- 區塊標題「競選訊息 Electoral Message」  
  建議：  
  - 「訊息」與其他頁面大多使用「資訊/政綱」不同，若這裡專指候選人個人簡短自述，可改為「競選簡介 Electoral Message」或「競選訊息／簡介」，讓使用者理解這是候選人自述文字。

- 底部提示：  
  - 「投票日期：2025年12月7日（星期日）」  
    建議：與其他頁一致可加空格「2025 年 12 月 7 日（星期日）」，但屬形式問題，可視設計決定。  
  - 「以上資料由候選人提供，並來自香港選舉管理委員會官方網站」  
    建議：改為「以上資料由候選人提供，並整理自香港選舉管理委員會官方網站。」句子更順。

---

## `src/components/DocumentRequirements.tsx`

- 「必須攜帶有效的香港永久性居民身份證正本。」  
  建議：若希望精準沿用官方說法，可維持；如強調涵蓋非永久居民，可在 UI 顯示處另加註解，這點需視你是否要完全對齊 EAC 文案。  
  已處理：**目前保持官方原文，未改動程式碼。**

- 標籤「必須」「建議」  
  建議：已很清楚，如希望語氣更柔和，可改為「必需」「建議攜帶」，但非必要。  
  已處理：**維持現有用語。**

---

## `src/components/VotingSteps.tsx`

- Step 1 描述：「投票站地點已印在選民登記證上。」  
  建議：改為「投票站地點已印在選民通知卡或選民登記證上。」（取決於你實際想指的文件，若要精準對齊官方用詞，可改回官方稱呼）。

- Step 3 提示：「只可選擇一名候選人，選票不可摺疊或損毀」  
  建議：  
  - 「只可選擇一名候選人」可改為「只可選擇一名候選人。」並與後句分開兩句。  
  - 例如：「只可選擇一名候選人。選票不可摺疊或損毀。」

---

## `src/components/VotingChecklist.tsx`

- 「計劃前往投票站的交通路線」  
  建議：可簡化為「計劃前往投票站的交通安排」，語感更自然。

- 完成提示：「🎉 準備就緒！」  
  建議：若希望更正式，可改為「你已完成投票前準備！」；目前風格偏輕鬆，可以保留。

---

## `src/components/VotingFAQ.tsx`

整體中英對照已相當流暢，僅有少量細節可選擇微調：

- 「投票站內嚴禁拍照、攝錄或使用手機進行通訊。」  
  建議：改為「投票站內嚴禁拍照、錄影或使用手機進行通訊。」（「攝錄」改為較常見的「錄影」）。

- 「請將手機保持靜音並收起。」  
  建議：改為「請將手機調至靜音並收起。」更常見說法。

---

## `src/pages/VotingDayGuide.tsx`

- 英文小字：「16 hours (extended)」  
  建議：若這是你自行概括，可改為「16-hour extended polling hours」語義更完整；若直接引用官方說法可保留。

- 「Important Reminders: Each voter can vote only once for one candidate. Photography and campaigning are prohibited inside polling stations. Keep your vote private.」  
  建議：  
  - 在「for one candidate」前後加逗號與句子分開，或改寫為兩句：「Each voter can vote only once for one candidate. Photography and campaigning are prohibited inside polling stations. Please keep your vote private.」

- 「如需更多資訊，請瀏覽選舉管理委員會官方網站」  
  建議：補句號：「如需更多資訊，請瀏覽選舉管理委員會官方網站。」

---

## `src/pages/ElectionInfo.tsx`

這頁多為官方條文式描述，整體已相當正式、接近政府文書風格。僅列出一些可選擇性微調：

- 「議席分布」  
  建議：視你偏好可改為「議席分佈」，兩者皆可。

- 「選民可以選擇在較少人的時間前往投票站投票。」  
  建議：改為「選民可選擇在人較少的時段前往投票站投票。」語序稍自然。

- 「只有名列於2025年地方選區正式選民登記冊上的已登記選民和功能界別正式選民登記冊上的已登記個人和團體選民，方有資格在相關地方選區及／或功能界別投票。」  
  建議：保持與官方原文一致較佳，不建議大改；若要略微口語化，可拆成兩句，但可能偏離官方語氣。

---

## `src/services/searchService.ts`

- `getDisclaimer()`：  
  原文：「結果僅展示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的推薦或評價。」  
  建議（與前文一致）：  
  - 「展示」→「顯示」  
  - 「推薦」→「建議」  
  - 修改版例子：「結果僅顯示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的建議或評價。」

---

## `src/lib/supabase.ts`

- 錯誤訊息：「缺少Supabase環境變數」  
  建議：  
  - 中英混用可略微調整為「缺少 Supabase 環境變數」，在英文前後加空格。  
  - 如要更使用者友好，可改為「系統缺少 Supabase 環境變數設定，請聯絡管理員。」但這會增加字數，視你需求而定。
