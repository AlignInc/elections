import { useState } from 'react';
import { MapPin, Navigation, Search, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { constituencyService } from '../services/constituencyService';
import type { Constituency, Candidate } from '../lib/supabase';
import CandidateList from '../components/CandidateList';

interface LocationSearchProps {
  onBack: () => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

export default function LocationSearch({ onBack, onSelectCandidate }: LocationSearchProps) {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [constituency, setConstituency] = useState<Constituency | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const handleUseGPS = async () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('你的瀏覽器不支援定位功能');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const result = await constituencyService.findConstituencyByCoordinates(latitude, longitude);

          if (result) {
            setConstituency(result);
            await loadCandidates(result.id);
          } else {
            setError('無法根據你的位置找到對應選區，請嘗試手動輸入地址');
          }
        } catch (err) {
          setError('定位失敗，請嘗試手動輸入地址');
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError('無法獲取你的位置，請嘗試手動輸入地址');
        setLoading(false);
        console.error(err);
      }
    );
  };

  const handleSearchAddress = async () => {
    if (!address.trim()) {
      setError('請輸入地址');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await constituencyService.findConstituencyByAddress(address);

      if (result) {
        setConstituency(result);
        await loadCandidates(result.id);
      } else {
        setError('找不到對應選區。請嘗試輸入：\n• 地區名稱（例如：太古城、銅鑼灣、中環、深水埗）\n• 完整地址（例如：太古城道100號）\n• 選區名稱（例如：東區、九龍西）');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('搜尋失敗。請檢查網絡連接，或嘗試輸入地區名稱（例如：太古城、銅鑼灣）。');
    } finally {
      setLoading(false);
    }
  };

  const loadCandidates = async (constituencyId: string) => {
    try {
      const data = await constituencyService.getCandidatesByConstituency(constituencyId);
      setCandidates(data);
    } catch (err) {
      setError('載入候選人資料失敗');
      console.error(err);
    }
  };

  const handleReset = () => {
    setAddress('');
    setConstituency(null);
    setCandidates([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 sm:mb-6 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回</span>
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-3 sm:mb-4 shadow-lg">
            <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-4">
            按所在位置查候選人
          </h1>
          <p className="text-sm sm:text-base text-gray-600 px-4">
            使用定位或輸入地址，查找你所屬選區的候選人資料
          </p>
        </div>

        {!constituency ? (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
                本功能需要使用你的定位，以查找對應選區及候選人，亦可選擇手動輸入地址。
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <button
                  onClick={handleUseGPS}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Navigation className="w-5 h-5" />
                  )}
                  <span>使用我的位置</span>
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-4 bg-white text-gray-500">或</span>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  手動輸入地址或區域
                </label>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearchAddress()}
                      placeholder="例如：銅鑼灣、中環、深水埗、太古城道100號"
                      className="w-full pl-9 sm:pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                      disabled={loading}
                    />
                  </div>
                  <button
                    onClick={handleSearchAddress}
                    disabled={loading || !address.trim()}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-sm sm:text-base whitespace-nowrap"
                  >
                    搜尋
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500 space-y-1">
                  <p className="font-medium">提示：可搜尋以下內容</p>
                  <ul className="list-disc list-inside space-y-0.5 ml-1">
                    <li>地區名稱：太古城、銅鑼灣、中環、旺角</li>
                    <li>完整地址：太古城道100號、彌敦道100號</li>
                    <li>行政區域：東區、油尖旺區、九龍城區</li>
                  </ul>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-4 sm:mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-red-800 text-xs sm:text-sm whitespace-pre-line">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>你所在的選區</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1">{constituency.name_zh}</h2>
                  <p className="text-green-100 text-sm sm:text-base">{constituency.name_en}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="text-white hover:bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium whitespace-nowrap ml-2 active:scale-95"
                >
                  重新搜尋
                </button>
              </div>

              {constituency.description && (
                <p className="text-green-50 text-xs sm:text-sm">{constituency.description}</p>
              )}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 px-1">
                本選區候選人（共 {candidates.length} 位，按姓名排序）
              </h3>

              {candidates.length > 0 ? (
                <CandidateList
                  candidates={candidates}
                  onSelectCandidate={onSelectCandidate}
                />
              ) : (
                <div className="bg-white rounded-xl border-2 border-gray-200 p-8 sm:p-12 text-center">
                  <p className="text-gray-500 text-sm sm:text-base">本選區暫無候選人資料</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
