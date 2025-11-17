import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label_zh: string;
  label_en: string;
  completed: boolean;
}

const defaultChecklistItems: Omit<ChecklistItem, 'completed'>[] = [
  {
    id: 'registration',
    label_zh: '確認選民登記狀態',
    label_en: 'Verify voter registration status'
  },
  {
    id: 'polling',
    label_zh: '確認投票站地點及開放時間',
    label_en: 'Confirm polling station location and hours'
  },
  {
    id: 'id',
    label_zh: '準備身份證明文件',
    label_en: 'Prepare identification documents'
  },
  {
    id: 'candidates',
    label_zh: '研究候選人政綱',
    label_en: 'Review candidate platforms'
  },
  {
    id: 'transport',
    label_zh: '計劃前往投票站的交通安排',
    label_en: 'Plan transportation to polling station'
  },
  {
    id: 'timing',
    label_zh: '選擇避開繁忙時段投票',
    label_en: 'Choose time to avoid peak hours'
  }
];

export default function VotingChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('votingChecklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultChecklistItems.map(item => ({ ...item, completed: false }));
      }
    }
    return defaultChecklistItems.map(item => ({ ...item, completed: false }));
  });

  useEffect(() => {
    localStorage.setItem('votingChecklist', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
        <h3 className="text-xl font-bold text-white mb-2">投票前檢查清單</h3>
        <p className="text-green-50 text-sm">Pre-Voting Checklist</p>

        <div className="mt-4">
          <div className="flex justify-between items-center text-white text-sm mb-2">
            <span>完成進度 Progress</span>
            <span className="font-bold">{completedCount}/{totalCount}</span>
          </div>
          <div className="w-full bg-green-700 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`w-full flex items-start gap-4 p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                item.completed
                  ? 'bg-green-50 border-green-200 hover:border-green-300'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  item.completed ? 'text-green-900 line-through' : 'text-gray-900'
                }`}>
                  {item.label_zh}
                </p>
                <p className={`text-sm mt-0.5 ${
                  item.completed ? 'text-green-700 line-through' : 'text-gray-600'
                }`}>
                  {item.label_en}
                </p>
              </div>
            </button>
          ))}
        </div>

        {completedCount === totalCount && (
          <div className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-lg text-center">
            <p className="text-green-900 font-bold mb-1">🎉 準備就緒！</p>
            <p className="text-green-700 text-sm">You're all set for voting day!</p>
          </div>
        )}
      </div>
    </div>
  );
}
