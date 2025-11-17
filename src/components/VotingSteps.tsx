import { MapPin, UserCheck, FileText, CheckSquare, Send, CheckCircle } from 'lucide-react';

interface VotingStep {
  icon: any;
  title_zh: string;
  title_en: string;
  description_zh: string;
  description_en: string;
  tip_zh?: string;
  tip_en?: string;
}

const votingSteps: VotingStep[] = [
  {
    icon: MapPin,
    title_zh: '抵達投票站',
    title_en: 'Arrive at Polling Station',
    description_zh: '在投票時間內（通常為上午7:30至晚上10:30）前往你的指定投票站。投票站地點已印在選民登記證上。',
    description_en: 'Go to your assigned polling station during voting hours (typically 7:30 AM to 10:30 PM). The location is printed on your voter registration card.',
    tip_zh: '建議避開早上及傍晚的繁忙時段',
    tip_en: 'Avoid peak hours in the morning and evening'
  },
  {
    icon: UserCheck,
    title_zh: '核實選民身份',
    title_en: 'Verify Voter Identity',
    description_zh: '向工作人員出示你的香港身份證。工作人員會核對你的身份及選民登記資料。',
    description_en: 'Present your Hong Kong Identity Card to poll workers. They will verify your identity and voter registration.',
    tip_zh: '請準備好身份證正本，不接受影印本',
    tip_en: 'Original ID card required, photocopies not accepted'
  },
  {
    icon: FileText,
    title_zh: '領取選票',
    title_en: 'Receive Ballot',
    description_zh: '經核實身份後，工作人員會向你發出選票。請檢查選票是否已加蓋官方印章。',
    description_en: 'After identity verification, poll workers will issue your ballot. Check that it bears the official stamp.',
    tip_zh: '確認選票印有官方印章才是有效選票',
    tip_en: 'Only ballots with official stamp are valid'
  },
  {
    icon: CheckSquare,
    title_zh: '填寫選票',
    title_en: 'Mark Your Ballot',
    description_zh: '進入投票間，在選票上你所選擇的候選人姓名旁的空格內填上「✓」或「✗」號。',
    description_en: 'Enter the voting booth and mark "✓" or "✗" next to your chosen candidate\'s name on the ballot.',
    tip_zh: '只可選擇一名候選人，選票不可摺疊或損毀',
    tip_en: 'Select only one candidate, do not fold or damage ballot'
  },
  {
    icon: Send,
    title_zh: '投入票箱',
    title_en: 'Cast Your Ballot',
    description_zh: '完成投票後，將選票摺疊並親自投入票箱。確保選票完全放入票箱內。',
    description_en: 'After voting, fold your ballot and personally place it in the ballot box. Ensure it is fully inserted.',
    tip_zh: '請親自投票，不得由他人代投',
    tip_en: 'You must cast your own ballot personally'
  },
  {
    icon: CheckCircle,
    title_zh: '完成投票',
    title_en: 'Voting Complete',
    description_zh: '投票完成！你已履行公民責任。請有秩序地離開投票站。',
    description_en: 'Voting complete! You have fulfilled your civic duty. Please leave the polling station in an orderly manner.',
    tip_zh: '投票站內禁止使用手機拍照或攝錄',
    tip_en: 'Photography and video recording prohibited inside polling station'
  }
];

export default function VotingSteps() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">投票流程</h3>
      <p className="text-gray-600 mb-8">Step-by-Step Voting Process</p>

      <div className="space-y-6">
        {votingSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === votingSteps.length - 1;

          return (
            <div key={index} className="relative">
              <div className="flex gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {!isLast && (
                    <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent transform -translate-x-1/2 h-6" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-blue-600 font-bold text-sm">步驟 {index + 1}</span>
                    <h4 className="text-lg font-bold text-gray-900">{step.title_zh}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{step.title_en}</p>

                  <p className="text-gray-700 mb-2 leading-relaxed">{step.description_zh}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description_en}</p>

                  {step.tip_zh && step.tip_en && (
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
                      <p className="text-sm text-blue-900 font-medium">💡 {step.tip_zh}</p>
                      <p className="text-xs text-blue-700 mt-1">{step.tip_en}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
