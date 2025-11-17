import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FAQ {
  question_zh: string;
  question_en: string;
  answer_zh: string;
  answer_en: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'timing',
    question_zh: '投票站的開放時間是什麼時候？',
    question_en: 'What are the polling station hours?',
    answer_zh: '投票站通常在投票日上午7:30開放，並於晚上10:30關閉。如果你在晚上10:30前已在投票站排隊等候，仍可投票。',
    answer_en: 'Polling stations typically open at 7:30 AM and close at 10:30 PM on voting day. If you are in line before 10:30 PM, you will still be able to vote.'
  },
  {
    category: 'location',
    question_zh: '如果我不知道我的投票站在哪裡怎麼辦？',
    question_en: 'What if I don\'t know where my polling station is?',
    answer_zh: '你的投票站地址印在選民登記證上。你也可以致電選舉事務處熱線查詢，或在選舉管理委員會網站查找。',
    answer_en: 'Your polling station address is printed on your voter registration card. You can also call the Electoral Affairs Commission hotline or check their website.'
  },
  {
    category: 'identification',
    question_zh: '如果我忘記帶身份證怎麼辦？',
    question_en: 'What if I forget my ID card?',
    answer_zh: '沒有有效的香港身份證正本，你將無法投票。建議在投票日前一天再次檢查你的身份證。',
    answer_en: 'Without a valid original HKID card, you cannot vote. It is recommended to check for your ID card the day before voting day.'
  },
  {
    category: 'process',
    question_zh: '我可以在投票站內使用手機嗎？',
    question_en: 'Can I use my phone in the polling station?',
    answer_zh: '投票站內嚴禁拍照、錄影或使用手機進行通訊。請將手機調至靜音並收起。',
    answer_en: 'Photography, video recording, and phone communication are strictly prohibited in polling stations. Please keep your phone on silent and put away.'
  },
  {
    category: 'ballot',
    question_zh: '如果我填錯選票怎麼辦？',
    question_en: 'What if I make a mistake on my ballot?',
    answer_zh: '如果你在投票間內發現選票填錯，可以向工作人員要求更換選票。但已投入票箱的選票不能取回或更換。',
    answer_en: 'If you make a mistake while in the voting booth, you can request a new ballot from poll workers. However, once a ballot is cast in the ballot box, it cannot be retrieved or replaced.'
  },
  {
    category: 'accessibility',
    question_zh: '如果我需要協助投票怎麼辦？',
    question_en: 'What if I need assistance voting?',
    answer_zh: '如果你因身體殘疾或其他原因需要協助，可以要求一名家人或朋友陪同進入投票間協助投票，或請投票站工作人員提供協助。',
    answer_en: 'If you need assistance due to physical disability or other reasons, you may request a family member or friend to accompany you into the voting booth, or ask poll workers for assistance.'
  },
  {
    category: 'issues',
    question_zh: '如果在投票站遇到問題或爭議怎麼辦？',
    question_en: 'What if I encounter problems or disputes at the polling station?',
    answer_zh: '請立即向投票站主任或工作人員報告。他們會按照選舉法例和指引處理。你也可以致電選舉事務處熱線尋求協助。',
    answer_en: 'Report immediately to the Presiding Officer or poll workers. They will handle the situation according to electoral laws and guidelines. You can also call the Electoral Affairs Commission hotline for assistance.'
  },
  {
    category: 'registration',
    question_zh: '我如何確認我已登記為選民？',
    question_en: 'How can I confirm I am registered to vote?',
    answer_zh: '你可以在選舉管理委員會網站查閱正式選民登記冊，或致電選舉事務處熱線查詢。已登記選民會收到選民登記證。',
    answer_en: 'You can check the official voter register on the Electoral Affairs Commission website or call their hotline. Registered voters will receive a voter registration card.'
  }
];

export default function VotingFAQ() {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language.startsWith('zh');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {t('votingFAQ.title')}
          </h3>
          <p className="text-gray-600 text-sm">
            {t('votingFAQ.subtitle')}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const question = isZh ? faq.question_zh : faq.question_en;
          const answer = isZh ? faq.answer_zh : faq.answer_en;

          return (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-purple-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 p-4 text-left bg-gray-50 hover:bg-purple-50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">{question}</p>
                </div>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="p-4 bg-white border-t-2 border-gray-100">
                  <p className="text-gray-800 leading-relaxed mb-2">
                    {answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
        <p className="font-bold text-purple-900 mb-2">
          {t('votingFAQ.stillHaveQuestionsTitle')}
        </p>
        <p className="text-sm text-purple-800 mb-1">
          {isZh
            ? t('votingFAQ.stillHaveQuestionsZh')
            : t('votingFAQ.stillHaveQuestionsEn')}
        </p>
      </div>
    </div>
  );
}
