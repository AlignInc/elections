import { CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Requirement {
  type: string;
  title_zh: string;
  title_en: string;
  description_zh: string;
  description_en: string;
  is_required: boolean;
}

const requirements: Requirement[] = [
  {
    type: 'hkid',
    title_zh: '香港身份證',
    title_en: 'Hong Kong Identity Card',
    description_zh: '必須攜帶有效的香港永久性居民身份證正本。不接受影印本、照片或臨時身份證明文件。',
    description_en: 'Must bring valid original Hong Kong Permanent Identity Card. Photocopies, photos, or temporary identity documents are not accepted.',
    is_required: true
  },
  {
    type: 'voter_card',
    title_zh: '選民登記證（建議）',
    title_en: 'Voter Registration Card (Recommended)',
    description_zh: '選民登記證上印有你的投票站地址及其他投票資訊，建議攜帶以便核對。',
    description_en: 'Voter registration card contains your polling station address and voting information. Recommended to bring for reference.',
    is_required: false
  }
];

export default function DocumentRequirements() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">所需文件</h3>
          <p className="text-gray-600 text-sm">Required Documents</p>
        </div>
      </div>

      <div className="space-y-4">
        {requirements.map((req) => (
          <div
            key={req.type}
            className={`p-5 rounded-lg border-2 ${
              req.is_required
                ? 'bg-red-50 border-red-200'
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {req.is_required ? (
                  <AlertCircle className="w-6 h-6 text-red-600" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className={`font-bold text-lg ${
                    req.is_required ? 'text-red-900' : 'text-blue-900'
                  }`}>
                    {req.title_zh}
                  </h4>
                  {req.is_required && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      必須
                    </span>
                  )}
                  {!req.is_required && (
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                      建議
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-2 ${
                  req.is_required ? 'text-red-700' : 'text-blue-700'
                }`}>
                  {req.title_en}
                </p>
                <p className={`text-sm leading-relaxed mb-1 ${
                  req.is_required ? 'text-red-800' : 'text-blue-800'
                }`}>
                  {req.description_zh}
                </p>
                <p className={`text-xs leading-relaxed ${
                  req.is_required ? 'text-red-700' : 'text-blue-700'
                }`}>
                  {req.description_en}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <span className="text-2xl">⚠️</span>
          </div>
          <div>
            <p className="font-bold text-yellow-900 mb-1">重要提示</p>
            <p className="text-sm text-yellow-800 mb-2">
              如未能出示有效香港身份證，將不能投票。請務必攜帶身份證正本。
            </p>
            <p className="text-xs text-yellow-700">
              Important: If you cannot present a valid HKID card, you will not be able to vote. Please ensure you bring the original card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
