import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Calendar, Users, MapPin, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ElectionInfoProps {
  onBack: () => void;
}

interface Section {
  id: string;
  title: string;
  titleEn?: string;
  icon: any;
  content: JSX.Element;
}

export default function ElectionInfo({ onBack }: ElectionInfoProps) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language.startsWith('zh');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['intro']));

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const sections: Section[] = [
    {
      id: 'intro',
      title: '選舉簡介',
      titleEn: 'Election Overview',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            根據《基本法》，立法會是香港特別行政區的立法機關，其職權包括制定、修改和廢除法律；批准稅收和公共開支；對政府的工作提出質詢，以及接受香港居民申訴並作出處理等。
          </p>
          <p className="text-gray-700 leading-relaxed">
            《基本法》附件二訂明立法會由90名議員組成，分別通過選舉委員會界別選舉（40席）、功能界別選舉（30席），以及地方選區選舉（20席）產生。立法會任期為四年，而第七屆立法會任期將於2025年12月31日完結。
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-purple-900 mb-2">議席分佈</h4>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                選舉委員會界別：40席
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                功能界別：30席
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                地方選區：20席（10個選區，每區2席）
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'nomination',
      title: '提名期',
      titleEn: 'Nomination Period',
      icon: Calendar,
      content: (
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-orange-600" />
            <h4 className="text-lg font-bold text-gray-900">提名期</h4>
          </div>
          <p className="text-gray-800 font-semibold text-lg">
            2025年10月24日（星期五）至 11月6日（星期四）
          </p>
        </div>
      )
    },
    {
      id: 'voting-arrangement',
      title: '投票安排',
      titleEn: 'Polling Arrangements',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-bold text-gray-900">投票日</h4>
            </div>
            <p className="text-gray-800 font-semibold text-xl mb-2">
              2025年12月7日（星期日）
            </p>
            <p className="text-sm text-gray-600">
              投票時間：上午7:30 至 晚上10:30
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            各投票站的預計輪候時間等資料會在投票日於投票站外及此選舉專用網站展示。選民可選擇在人較少的時段前往投票站投票。
          </p>
        </div>
      )
    },
    {
      id: 'eligibility',
      title: '投票資格',
      titleEn: 'Who Can Vote',
      icon: Users,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-blue-900 mb-2">選舉委員會界別</h4>
            <p className="text-sm text-blue-800">
              只有名列於選舉委員會正式委員登記冊上的委員方可在選舉委員會界別投票。有關登記冊於2025年9月17日發表。
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-green-900 mb-2">功能界別及地方選區</h4>
            <p className="text-sm text-green-800">
              只有名列於2025年地方選區正式選民登記冊上的已登記選民和功能界別正式選民登記冊上的已登記個人和團體選民，方有資格在相關地方選區及／或功能界別投票。有關登記冊於2025年9月25日發表。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'gc',
      title: '地方選區',
      titleEn: 'Geographical Constituencies',
      icon: MapPin,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            共設10個地方選區，每個選區產生2名議員。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { code: 'LC1', name: '香港島東' },
              { code: 'LC2', name: '香港島西' },
              { code: 'LC3', name: '九龍東' },
              { code: 'LC4', name: '九龍西' },
              { code: 'LC5', name: '九龍中' },
              { code: 'LC6', name: '新界東南' },
              { code: 'LC7', name: '新界北' },
              { code: 'LC8', name: '新界西北' },
              { code: 'LC9', name: '新界西南' },
              { code: 'LC10', name: '新界東北' }
            ].map((district) => (
              <div key={district.code} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-500">{district.code}</span>
                  <span className="font-medium text-gray-900">{district.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mt-4">
            <h4 className="font-bold text-purple-900 mb-2">提名要求</h4>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>候選人須為年滿21歲、在緊接提名前的3年內通常居港的地方選區已登記選民</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>須獲得所在地方選區不少於100名、但不多於200名選民提名</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>須獲得不少於10名、但不多於20名選舉委員會委員的提名</span>
              </li>
            </ul>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
            <h4 className="font-bold text-orange-900 mb-2">投票制度</h4>
            <p className="text-sm text-orange-800">
              採用「雙議席單票制」，每名選民在其地方選區投選1名候選人，在各地方選區得票最多的2名候選人當選為該地方選區的議員。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'how-to-vote',
      title: '如何投票',
      titleEn: 'How to Vote',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">前往投票站</h5>
                <p className="text-sm text-gray-700">在2025年12月7日（星期日）的投票時間內前往投票通知卡上指定的投票站</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">出示身份證明</h5>
                <p className="text-sm text-gray-700">向投票站工作人員出示有效的香港身份證正本或指定的替代文件</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">領取選票</h5>
                <p className="text-sm text-gray-700">經核實後，投票站工作人員會向你發出選票</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">填劃選票</h5>
                <p className="text-sm text-gray-700 mb-2">在投票間填劃選票：</p>
                <ul className="text-xs text-gray-600 space-y-1 ml-4">
                  <li>• 地方選區：用印章在1名候選人姓名左邊的圓圈內蓋上「✔」號</li>
                  <li>• 功能界別：用黑色筆填滿1名候選人姓名旁的橢圓形圈</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">投入票箱</h5>
                <p className="text-sm text-gray-700">填妥選票後，將選票正面向下放入對應顏色的投票箱</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'documents',
      title: '申領選票所需的文件',
      titleEn: 'Documents Required for Ballot',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-900 mb-2">必須文件</h4>
                <p className="text-sm text-red-800 mb-2">
                  任何選民在申領選票時，必須出示其有效的香港身份證的正本，或以下指定替代文件：
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">有效香港特區護照正本</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">《豁免登記證明書》正本</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">《申請香港身份證收據》正本</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">有效海員身份證正本</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">有效簽證身份書正本</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">警署報失紙連同有效護照或相類旅行證件正本</span>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>注意：</strong>英國國民（海外）護照並非有效旅行證件和身份證明。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'special-queue',
      title: '為有需要的選民設立特別隊伍',
      titleEn: 'Special Queue for Voters in Need',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm">
            投票站主任如信納某位抵達投票站投票的選民符合以下描述，會指示該選民前往特別隊伍：
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg">
                  👴
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-blue-900 mb-1">年滿70歲的人士</h5>
                  <p className="text-sm text-blue-800">包括出生年份為1955年或之前的人士</p>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-lg">
                  🤰
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-pink-900 mb-1">孕婦</h5>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-lg">
                  ♿
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-green-900 mb-1">有特殊需要人士</h5>
                  <p className="text-sm text-green-800">
                    因疾病、損傷、殘疾或依賴助行器具，以致不能夠長時間排隊，或難以排隊
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'notices',
      title: '選民須知',
      titleEn: 'Important Notices for Voters',
      icon: AlertCircle,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <h4 className="font-bold text-red-900 text-lg">重要提醒</h4>
            </div>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              根據《選舉（舞弊及非法行為）條例》（第554章），選民切勿作出以下行為：
            </p>
            <ul className="space-y-2 text-sm text-red-900">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>索取或接受任何利益、食物、飲料或娛樂，從而在選舉中投票或不投票</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>故意妨礙或阻止他人在選舉中投票</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>明知本身無權在選舉中投票卻在該選舉中投票</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>發布關於候選人屬虛假或具誤導性的事實陳述</span>
              </li>
            </ul>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-5">
            <h4 className="font-bold text-yellow-900 mb-3">投票站內禁止行為</h4>
            <ul className="space-y-2 text-sm text-yellow-900">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>與任何選民通信息，包括展示選票上的選擇</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>使用流動電話或其他器材進行電子通訊</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>拍影片、拍照、錄音或錄影</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>請其他選民代為填劃選票</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span>干擾其他正在投票的選民</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/40 via-purple-50/60 to-purple-100/50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('common.back')}</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl mb-4 shadow-md">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('electionInfo.pageTitle')}
          </h1>
          <p className="text-gray-600">
            {t('electionInfo.pageSubtitle')}
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.has(section.id);

            return (
              <div
                key={section.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {isZh ? section.title : section.titleEn || section.title}
                    </h2>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="pt-4">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-5">
          {isZh ? (
            <p className="text-sm text-blue-900">
              {t('common.officialSource')}
            </p>
          ) : (
            <p className="text-sm text-blue-900">
              {t('common.officialSourceEn')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
