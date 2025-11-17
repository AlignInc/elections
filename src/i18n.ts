import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  zh: {
    translation: {
      common: {
        languageChinese: '繁體中文',
        languageEnglish: 'English',
        back: '返回',
        backHome: '返回主頁',
        loading: '載入中',
        search: '搜尋',
        reset: '重置',
        candidatesCountPrefix: '共',
        candidatesCountSuffix: '位候選人',
        constituencyCandidatesPrefix: '本選區候選人（共',
        constituencyCandidatesSuffix: '位，按姓名排序）',
        listCandidatesPrefix: '候選人列表（共',
        listCandidatesSuffix: '位，按姓名排序）',
        noCandidatesInConstituency: '本選區暫未有候選人資料。',
        noConstituencyOfType: '此類型暫未有選區資料。',
        loadingConstituencies: '載入選區資料中...',
        loadingCandidates: '載入候選人資料中...',
        loadFailedTitle: '載入失敗',
        seatsLabel: '議席',
        officialSource: '資料來源：香港特別行政區選舉管理委員會',
        officialSourceEn: 'Source: Electoral Affairs Commission, Hong Kong SAR'
      },
      home: {
        sloganTitle: '投入選舉，共創未來',
        description:
          '匯集2025年立法會換屆選舉資訊，助你輕鬆查找候選人、比較政綱立場、了解投票流程，讓每一票更有意義。',
        featureCandidateTitle: '查找候選人',
        featureCandidateDesc: '使用定位、輸入地址或直接選擇選區查找候選人',
        featureIssueTitle: '查找政綱',
        featureIssueDesc: '輸入關心的議題，找出相關候選人的政綱內容',
        featureGuideTitle: '投票日指南',
        featureGuideDesc: '查看完整投票流程、所需文件及常見問題解答',
        featureInfoTitle: '選舉資訊',
        featureInfoDesc: '瞭解立法會選舉制度、議席分配、投票資格等官方資訊',
        getStarted: '開始使用',
        aboutTitle: '關於本系統',
        aboutLine1:
          '本系統整合2025年立法會換屆選舉地方選區全部 51 位直選候選人的基本資料及政綱',
        aboutLine2: '資料來源：香港選舉管理委員會官方網站',
        aboutLine3: '投票日期：2025年12月7日（星期日）',
        aboutFooter: '如有疑問，請以官方公布的資料為準。'
      },
      languageToggle: {
        zhLabel: '繁體中文',
        enLabel: 'English'
      },
      countdown: {
        title: '距離投票日',
        days: '天',
        hours: '小時',
        minutes: '分鐘',
        seconds: '秒',
        dateLine: '2025年12月7日（星期日）',
        reminder: '記得行使您的投票權利'
      },
      candidateSearch: {
        title: '查找候選人',
        subtitle: '使用定位、輸入地址或直接選擇選區',
        useCurrentLocation: '使用當前位置',
        useCurrentLocationDesc: '自動定位並查找你所屬選區的候選人',
        searchByAddress: '輸入地址查找',
        searchByAddressDesc: '輸入你的地址或所在區域名稱',
        browseByConstituency: '按選區瀏覽',
        browseByConstituencyDesc: '選擇具體選區，瀏覽該選區所有候選人',
        searchByName: '輸入姓名查找',
        searchByNameDesc: '直接輸入候選人中文或英文姓名搜尋',
        inputNameLabel: '輸入候選人姓名',
        inputNamePlaceholder: '例如：李慧琼、吳秋北、Starry Lee',
        inputAddressLabel: '輸入地址',
        inputAddressPlaceholder: '例如：銅鑼灣、中環、深水埗',
        searchButton: '搜尋',
        errorTitle: '搜尋失敗',
        errorEmptyAddress: '請輸入地址',
        errorEmptyName: '請輸入候選人姓名',
        errorNoCandidates: '找不到相關候選人，請嘗試使用其他關鍵詞。',
        errorSearchFailed: '搜尋失敗，請稍後再試。',
        errorLoadConstituencies: '載入選區資料失敗',
        errorLoadCandidates: '載入候選人資料失敗',
        errorNoConstituencyByAddress:
          '找不到對應選區，請嘗試輸入更具體的地址（例如：銅鑼灣、中環、深水埗等）。',
        errorNoConstituencyByLocation:
          '無法根據你的位置找到對應選區，請嘗試手動輸入地址或選擇選區',
        errorLocationFailed:
          '定位失敗，請嘗試手動輸入地址或選擇選區',
        errorLocationDenied:
          '無法獲取你的位置，請嘗試手動輸入地址或選擇選區',
        browserNoGeolocation: '你的瀏覽器不支援定位功能',
        resultsTitle: '搜尋結果（共 {{count}} 位）'
      },
      issueSearch: {
        title: '按議題關鍵詞查找政綱',
        subtitle: '輸入你關心的議題，找出相關候選人的政綱內容。',
        inputLabel: '輸入你關心的議題或問題',
        inputPlaceholder: '例如：公屋輪候時間、基層醫療、托兒服務',
        tagLabel: '或選擇議題標籤（可多選）',
        searchButton: '搜尋政綱',
        searching: '搜尋中...',
        reset: '重置',
        errorEmpty:
          '請輸入關鍵詞或選擇至少一個議題標籤。',
        errorSearchFailed: '搜尋失敗，請稍後再試。',
        noResultsTitle: '未找到相關政綱內容',
        noResultsSubtitle:
          '請嘗試使用不同的關鍵詞或議題標籤。',
        resultsTitle: '搜尋結果',
        resultsCountPrefix: '共找到',
        resultsCountSuffix: '位候選人',
        userConstituencyTitle: '你所屬選區',
        otherConstituenciesTitle: '其他選區',
        allConstituenciesTitle: '所有選區',
        matchedTopicsTitle: '匹配議題：',
        lastUpdated: '最後更新：',
        viewSource: '查看原文',
        viewDetails: '查看詳情',
        disclaimer:
          '結果僅顯示政綱中與你輸入關鍵詞相關的內容，不構成任何形式的建議或評價。',
        loadCandidateFailedAlert: '無法載入候選人資料，請稍後再試',
        loadCandidateErrorConsole: '載入候選人資料失敗:'
      },
      locationSearch: {
        title: '按所在位置查候選人',
        subtitle: '使用定位或輸入地址，查找你所屬選區的候選人資料',
        introTip:
          '本功能需要使用你的定位，以查找對應選區及候選人，亦可選擇手動輸入地址。',
        useMyLocation: '使用我的位置',
        orDivider: '或',
        manualLabel: '手動輸入地址或區域',
        manualPlaceholder: '例如：銅鑼灣、中環、深水埗、太古城道100號',
        manualSearchButton: '搜尋',
        manualHintTitle: '提示：可搜尋以下內容',
        manualHintRegion: '地區名稱：太古城、銅鑼灣、中環、旺角',
        manualHintAddress: '完整地址：太古城道100號、彌敦道100號',
        manualHintDistrict: '行政區域：東區、油尖旺區、九龍城區',
        yourConstituencyBadge: '你所在的選區',
        constituencyCandidatesTitlePrefix: '本選區候選人（共',
        constituencyCandidatesTitleSuffix: '位，按姓名排序）',
        errorSearchFailed:
          '搜尋失敗。請檢查網絡連接，或嘗試輸入地區名稱（例如：太古城、銅鑼灣）。',
        errorNoConstituency:
          '找不到對應選區。請嘗試輸入：\n• 地區名稱（例如：太古城、銅鑼灣、中環、深水埗）\n• 完整地址（例如：太古城道100號）\n• 選區名稱（例如：東區、九龍西）'
      },
      constituencyBrowse: {
        title: '按選區瀏覽候選人資料',
        subtitle: '選擇具體選區，瀏覽該選區所有候選人的詳細資料。',
        selectType: '選擇選區類型',
        types: {
          gc: '地方選區',
          fc: '功能界別',
          ecc: '選舉委員會界別'
        }
      },
      votingDay: {
        title: '投票日指南',
        subtitle: '投票日指南',
        description: '完整的投票流程、所需文件及常見問題解答',
        dateLabel: '投票日期',
        timeLabel: '投票時間',
        placeLabel: '投票地點',
        dateValueZh: '2025年12月7日',
        dateValueEn: 'Dec 7, 2025 (Sunday)',
        timeValue: '07:30 - 23:30',
        placeValueZh: '指定投票站',
        placeValueEn: 'Assigned Polling Station',
        noticeTitle: '投票須知',
        noticeItems: {
          item1: '每名選民只可投票一次，並只可選擇一名候選人',
          item2: '投票站內嚴禁拍照、錄影或使用通訊設備',
          item3: '請保持投票的私密性，不要向他人透露你的投票選擇',
          item4: '投票站內禁止進行任何拉票或宣傳活動',
          item5: '如有疑問或遇到困難，請向投票站工作人員尋求協助'
        },
        noticeFooter:
          '重要提醒：每名選民只可投票一次，並只可選擇一名候選人。投票站內禁止拍照及拉票，請保密你的投票選擇。',
        moreInfoZh: '如需更多資訊，請瀏覽選舉管理委員會官方網站。',
        moreInfoEn:
          'For more information, visit the Electoral Affairs Commission official website'
      },
      electionInfo: {
        pageTitle: '2025年立法會選舉資訊',
        pageSubtitle: 'Legislative Council Election 2025 Information'
      },
      candidateList: {
        groupCountPrefix: '共',
        groupCountSuffix: '位候選人'
      },
      candidateDetail: {
        shareButton: '分享',
        ageLabel: '年齡',
        occupationLabel: '職業',
        politicalLabel: '政治背景',
        electoralMessageLabel: '競選簡介',
        officialLinksTitle: '官方資料連結',
        officialProfilePdf: '候選人簡介 PDF',
        officialProfilePdfEn: 'Candidate Profile',
        officialConstituencyPage: '選區候選人介紹',
        officialConstituencyPageEn: 'Constituency Page',
        contactTitle: '聯絡方式',
        voteDate: '投票日期：2025 年 12 月 7 日（星期日）',
        voteTime: '投票時間：上午7:30至晚上10:30',
        footerNote:
          '以上資料由候選人提供，並整理自香港選舉管理委員會官方網站。',
        shareCopied: '候選人資料已複製到剪貼簿！',
        shareFailed: '分享功能暫時無法使用，請稍後再試。'
      },
      votingChecklist: {
        title: '投票前檢查清單',
        subtitle: '投票前檢查清單',
        progressLabel: '完成進度',
        doneTitle: '🎉 準備就緒！',
        doneSubtitle: '你已完成投票前準備！'
      },
      votingFAQ: {
        title: '常見問題',
        subtitle: '常見問題',
        stillHaveQuestionsTitle: '仍有疑問？',
        stillHaveQuestionsZh:
          '如有其他問題，請聯絡選舉事務處或瀏覽選舉管理委員會網站。',
        stillHaveQuestionsEn:
          'Still have questions? Contact the Electoral Affairs Commission or visit their website.'
      },
      votingSteps: {
        title: '投票流程',
        subtitle: '投票流程'
      }
    }
  },
  en: {
    translation: {
      common: {
        languageChinese: 'Traditional Chinese',
        languageEnglish: 'English',
        back: 'Back',
        backHome: 'Back to Home',
        loading: 'Loading',
        search: 'Search',
        reset: 'Reset',
        candidatesCountPrefix: 'Total',
        candidatesCountSuffix: 'candidates',
        constituencyCandidatesPrefix: 'Candidates in this constituency (',
        constituencyCandidatesSuffix:
          ' in total, sorted by name)',
        listCandidatesPrefix: 'Candidate list (',
        listCandidatesSuffix:
          ' in total, sorted by name)',
        noCandidatesInConstituency:
          'There are currently no candidate records in this constituency.',
        noConstituencyOfType:
          'There are currently no constituencies for this type.',
        loadingConstituencies: 'Loading constituency data...',
        loadingCandidates: 'Loading candidate data...',
        loadFailedTitle: 'Failed to load',
        seatsLabel: 'Seats',
        officialSource:
          'Source: Electoral Affairs Commission of the Hong Kong SAR',
        officialSourceEn:
          'Source: Electoral Affairs Commission, Hong Kong SAR'
      },
      home: {
        sloganTitle: 'Participate in the election, shape the future together',
        sloganSubtitle:
          'Join the Election, Together We Create the Future',
        description:
          'This site gathers information about the 2025 Legislative Council election to help you find candidates, compare their platforms, and understand the voting procedures so that every vote counts.',
        featureCandidateTitle: 'Search Candidates',
        featureCandidateDesc:
          'Use location, address input, or constituency selection to find candidates',
        featureIssueTitle: 'Search Manifestos',
        featureIssueDesc:
          'Enter issues you care about to find related manifesto content',
        featureGuideTitle: 'Voting Day Guide',
        featureGuideDesc:
          'See the full voting procedure, required documents, and FAQs',
        featureInfoTitle: 'Election Information',
        featureInfoDesc:
          'Learn about the electoral system, seat allocation, and voter eligibility',
        getStarted: 'Get Started',
        aboutTitle: 'About This System',
        aboutLine1:
          'This system consolidates basic information and platforms of all 51 geographical constituency candidates in the 2025 Legislative Council election.',
        aboutLine2:
          'Data source: official website of the Electoral Affairs Commission of Hong Kong',
        aboutLine3: 'Polling day: 7 December 2025 (Sunday)',
        aboutFooter:
          'In case of any doubt, please refer to official information.'
      },
      languageToggle: {
        zhLabel: '繁體中文',
        enLabel: 'English'
      },
      countdown: {
        title: 'Time until polling day',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        dateLine: '7 December 2025 (Sunday)',
        reminder: 'Remember to exercise your right to vote'
      },
      candidateSearch: {
        title: 'Search Candidates',
        subtitle:
          'Use your location, enter an address, or choose a constituency',
        useCurrentLocation: 'Use Current Location',
        useCurrentLocationDesc:
          'Automatically locate and find candidates in your constituency',
        searchByAddress: 'Search by Address',
        searchByAddressDesc:
          'Enter your address or the name of your area',
        browseByConstituency: 'Browse by Constituency',
        browseByConstituencyDesc:
          'Select a specific constituency to view all its candidates',
        searchByName: 'Search by Name',
        searchByNameDesc:
          'Directly search using the candidate’s Chinese or English name',
        inputNameLabel: 'Enter Candidate Name',
        inputNamePlaceholder:
          'e.g. Lee Wai-king, Ng Chau-pei, Starry Lee',
        inputAddressLabel: 'Enter Address',
        inputAddressPlaceholder:
          'e.g. Causeway Bay, Central, Sham Shui Po',
        searchButton: 'Search',
        errorTitle: 'Search Failed',
        errorEmptyAddress: 'Please enter an address',
        errorEmptyName: 'Please enter a candidate name',
        errorNoCandidates:
          'No matching candidates were found. Please try different keywords.',
        errorSearchFailed:
          'Search failed. Please try again later.',
        errorLoadConstituencies:
          'Failed to load constituency data',
        errorLoadCandidates:
          'Failed to load candidate data',
        errorNoConstituencyByAddress:
          'No constituency found. Please enter a more specific address (e.g. Causeway Bay, Central, Sham Shui Po).',
        errorNoConstituencyByLocation:
          'Unable to find a constituency based on your location. Please try entering the address or selecting a constituency manually.',
        errorLocationFailed:
          'Location failed. Please try entering the address or selecting a constituency manually.',
        errorLocationDenied:
          'Unable to access your location. Please try entering the address or selecting a constituency manually.',
        browserNoGeolocation:
          'Your browser does not support geolocation.',
        resultsTitle: 'Search results ({{count}} candidates)'
      },
      issueSearch: {
        title: 'Search Manifestos by Issue Keywords',
        subtitle:
          'Enter the issues you care about to find related platform content.',
        inputLabel:
          'Enter the issue or question you care about',
        inputPlaceholder:
          'e.g. public housing waiting time, primary healthcare, childcare services',
        tagLabel: 'Or select issue tags (multiple)',
        searchButton: 'Search Platforms',
        searching: 'Searching...',
        reset: 'Reset',
        errorEmpty:
          'Please enter keywords or select at least one issue tag.',
        errorSearchFailed:
          'Search failed. Please try again later.',
        noResultsTitle: 'No related platform content found',
        noResultsSubtitle:
          'Please try using different keywords or issue tags.',
        resultsTitle: 'Search Results',
        resultsCountPrefix: 'Found',
        resultsCountSuffix: 'candidates',
        userConstituencyTitle: 'Your Constituency',
        otherConstituenciesTitle: 'Other Constituencies',
        allConstituenciesTitle: 'All Constituencies',
        matchedTopicsTitle: 'Matched Topics:',
        lastUpdated: 'Last updated:',
        viewSource: 'View original',
        viewDetails: 'View details',
        disclaimer:
          'Results only show parts of platforms related to your input keywords and do not constitute any recommendation or evaluation.',
        loadCandidateFailedAlert:
          'Unable to load candidate details. Please try again later.',
        loadCandidateErrorConsole:
          'Failed to load candidate details:'
      },
      locationSearch: {
        title: 'Search Candidates by Location',
        subtitle:
          'Use your location or enter an address to find candidates in your constituency',
        introTip:
          'This feature uses your location to find the corresponding constituency and candidates. You may also choose to enter the address manually.',
        useMyLocation: 'Use My Location',
        orDivider: 'or',
        manualLabel: 'Enter address or area manually',
        manualPlaceholder:
          'e.g. Causeway Bay, Central, Sham Shui Po, 100 Taikoo Shing Road',
        manualSearchButton: 'Search',
        manualHintTitle: 'Tip: you can search by',
        manualHintRegion:
          'Area name: Taikoo Shing, Causeway Bay, Central, Mong Kok',
        manualHintAddress:
          'Full address: 100 Taikoo Shing Road, 100 Nathan Road',
        manualHintDistrict:
          'District: Eastern District, Yau Tsim Mong, Kowloon City',
        yourConstituencyBadge: 'Your Constituency',
        constituencyCandidatesTitlePrefix:
          'Candidates in this constituency (',
        constituencyCandidatesTitleSuffix:
          ' in total, sorted by name)',
        errorSearchFailed:
          'Search failed. Please check your network connection or try entering the area name (e.g. Taikoo Shing, Causeway Bay).',
        errorNoConstituency:
          'No matching constituency was found. Please try entering:\n• Area names (e.g. Taikoo Shing, Causeway Bay, Central, Sham Shui Po)\n• Full addresses (e.g. 100 Taikoo Shing Road)\n• Constituency names (e.g. Eastern District, Kowloon West)'
      },
      constituencyBrowse: {
        title: 'Browse Candidates by Constituency',
        subtitle:
          'Select a constituency to view all its candidates and details.',
        selectType: 'Select constituency type',
        types: {
          gc: 'Geographical Constituencies',
          fc: 'Functional Constituencies',
          ecc: 'Election Committee Constituency'
        }
      },
      votingDay: {
        title: 'Voting Day Guide',
        subtitle: 'Voting Day Guide',
        description:
          'A complete guide to voting procedures, required documents, and frequently asked questions.',
        dateLabel: 'Polling Day',
        timeLabel: 'Polling Hours',
        placeLabel: 'Polling Place',
        dateValueZh: '7 December 2025',
        dateValueEn: 'Dec 7, 2025 (Sunday)',
        timeValue: '07:30 - 23:30',
        placeValueZh: 'Assigned Polling Station',
        placeValueEn: 'Assigned Polling Station',
        noticeTitle: 'Important Voting Reminders',
        noticeItems: {
          item1:
            'Each voter can vote only once and for only one candidate.',
          item2:
            'Photography, video recording, and use of communication devices are strictly prohibited inside polling stations.',
          item3:
            'Keep your vote private. Do not disclose your choice to others.',
          item4:
            'Campaigning and promotional activities are prohibited inside polling stations.',
          item5:
            'If you have any questions or difficulties, please seek help from polling staff.'
        },
        noticeFooter:
          'Important reminders: Each voter can vote only once for one candidate. Photography and campaigning are prohibited inside polling stations. Please keep your vote private.',
        moreInfoZh:
          'For more information, please visit the official website of the Electoral Affairs Commission.',
        moreInfoEn:
          'For more information, visit the Electoral Affairs Commission official website'
      },
      electionInfo: {
        pageTitle:
          '2025 Legislative Council Election Information',
        pageSubtitle:
          'Legislative Council Election 2025 Information'
      },
      candidateList: {
        groupCountPrefix: 'Total',
        groupCountSuffix: 'candidates'
      },
      candidateDetail: {
        shareButton: 'Share',
        ageLabel: 'Age',
        occupationLabel: 'Occupation',
        politicalLabel: 'Political Affiliation',
        electoralMessageLabel: 'Electoral Message',
        officialLinksTitle: 'Official Links',
        officialProfilePdf: 'Candidate Profile PDF',
        officialProfilePdfEn: 'Candidate Profile',
        officialConstituencyPage:
          'Constituency Candidate Information',
        officialConstituencyPageEn: 'Constituency Page',
        contactTitle: 'Contact',
        voteDate: 'Polling Day: 7 December 2025 (Sunday)',
        voteTime:
          'Polling Hours: 7:30 AM to 10:30 PM',
        footerNote:
          'The above information is provided by candidates and compiled from the official website of the Electoral Affairs Commission.',
        shareCopied:
          'Candidate information has been copied to the clipboard!',
        shareFailed:
          'Sharing is temporarily unavailable. Please try again later.'
      },
      votingChecklist: {
        title: 'Pre-Voting Checklist',
        subtitle: 'Pre-Voting Checklist',
        progressLabel: 'Progress',
        doneTitle: '🎉 All set!',
        doneSubtitle:
          "You're all set for voting day!"
      },
      votingFAQ: {
        title: 'Frequently Asked Questions',
        subtitle: 'Frequently Asked Questions',
        stillHaveQuestionsTitle: 'Still have questions?',
        stillHaveQuestionsZh:
          'If you have further questions, please contact the Registration and Electoral Office or visit the Electoral Affairs Commission website.',
        stillHaveQuestionsEn:
          'Still have questions? Contact the Electoral Affairs Commission or visit their website.'
      },
      votingSteps: {
        title: 'Voting Process',
        subtitle: 'Step-by-Step Voting Process'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
