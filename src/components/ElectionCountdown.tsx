import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { calculateCountdown, ELECTION_DATE } from '../utils/countdown';

export default function ElectionCountdown() {
  const [countdown, setCountdown] = useState(calculateCountdown(ELECTION_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(ELECTION_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (countdown.isPast) {
    return (
      <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-4 sm:p-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          <h3 className="text-base sm:text-lg font-bold text-gray-700">投票已結束</h3>
        </div>
        <p className="text-center text-gray-600 text-sm sm:text-base">2025年12月7日立法會選舉已經完成</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
        <h3 className="text-lg sm:text-xl font-bold">距離投票日</h3>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">{countdown.days}</div>
          <div className="text-xs opacity-90">天</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">{countdown.hours}</div>
          <div className="text-xs opacity-90">小時</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">{countdown.minutes}</div>
          <div className="text-xs opacity-90">分鐘</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">{countdown.seconds}</div>
          <div className="text-xs opacity-90">秒</div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs sm:text-sm opacity-90">2025年12月7日（星期日）</p>
        <p className="text-xs opacity-75 mt-1">記得行使您的投票權利</p>
      </div>
    </div>
  );
}
