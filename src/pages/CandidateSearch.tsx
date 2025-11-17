import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Building2, Navigation, Search, Loader2, AlertCircle, ChevronRight, User } from 'lucide-react';
import { constituencyService } from '../services/constituencyService';
import { candidateService } from '../services/candidateService';
import type { Constituency, Candidate } from '../lib/supabase';
import CandidateList from '../components/CandidateList';

interface CandidateSearchProps {
  onBack: () => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

type SearchMode = 'select' | 'location' | 'browse' | 'name';

export default function CandidateSearch({ onBack, onSelectCandidate }: CandidateSearchProps) {
  const [searchMode, setSearchMode] = useState<SearchMode>('select');
  const [address, setAddress] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [constituency, setConstituency] = useState<Constituency | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const [selectedType, setSelectedType] = useState<string>('地方選區');
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null);

  useEffect(() => {
    if (searchMode === 'browse') {
      loadConstituencies();
    }
  }, [selectedType, searchMode]);

  const loadConstituencies = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await constituencyService.getConstituenciesByType(selectedType);
      setConstituencies(data);
    } catch (err) {
      setError('載入選區資料失敗');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUseGPS = async () => {
    setLoading(true);
    setError(null);
    setSearchMode('location');

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
            setError('無法根據你的位置找到對應選區，請嘗試手動輸入地址或選擇選區');
          }
        } catch (err) {
          setError('定位失敗，請嘗試手動輸入地址或選擇選區');
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError('無法獲取你的位置，請嘗試手動輸入地址或選擇選區');
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
    setSearchMode('location');

    try {
      const result = await constituencyService.findConstituencyByAddress(address);

      if (result) {
        setConstituency(result);
        await loadCandidates(result.id);
      } else {
        setError('找不到對應選區，請嘗試輸入更具體的地址（例如：銅鑼灣、中環、深水埗等）。');
      }
    } catch (err) {
      setError('搜尋失敗，請稍後再試。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectConstituency = async (constituency: Constituency) => {
    setSelectedConstituency(constituency);
    setLoading(true);
    setError(null);

    try {
      const data = await constituencyService.getCandidatesByConstituency(constituency.id);
      setCandidates(data);
    } catch (err) {
      setError('載入候選人資料失敗');
      console.error(err);
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

  const handleSearchByName = async () => {
    if (!candidateName.trim()) {
      setError('請輸入候選人姓名');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const results = await candidateService.searchCandidates(candidateName);

      if (results.length === 0) {
        setError('找不到相關候選人，請嘗試使用其他關鍵詞。');
      }

      setCandidates(results);
    } catch (err) {
      setError('搜尋失敗，請稍後再試。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchMode('select');
    setAddress('');
    setCandidateName('');
    setConstituency(null);
    setCandidates([]);
    setSelectedConstituency(null);
    setError(null);
  };

  const groupedConstituencies = constituencies.reduce((acc, constituency) => {
    const region = constituency.region || '其他';
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(constituency);
    return acc;
  }, {} as Record<string, Constituency[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={searchMode === 'select' ? onBack : handleReset}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{searchMode === 'select' ? '返回主頁' : '返回'}</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            查找候選人
          </h1>
          <p className="text-gray-600">
            使用定位、輸入地址或直接選擇選區
          </p>
        </div>

        {searchMode === 'select' && (
          <div className="space-y-4">
            <button
              onClick={handleUseGPS}
              className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Navigation className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    使用當前位置
                  </h3>
                  <p className="text-sm text-gray-600">
                    自動定位並查找你所屬選區的候選人
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button
              onClick={() => setSearchMode('location')}
              className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    輸入地址查找
                  </h3>
                  <p className="text-sm text-gray-600">
                    輸入你的地址或所在區域名稱
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button
              onClick={() => setSearchMode('browse')}
              className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                    按選區瀏覽
                  </h3>
                  <p className="text-sm text-gray-600">
                    選擇具體選區，瀏覽該選區所有候選人
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button
              onClick={() => setSearchMode('name')}
              className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                    輸入姓名查找
                  </h3>
                  <p className="text-sm text-gray-600">
                    直接輸入候選人中文或英文姓名搜尋
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>
        )}

        {searchMode === 'name' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-orange-600" />
                輸入候選人姓名
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchByName()}
                  placeholder="例如：李慧琼、吳秋北、Starry Lee"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSearchByName}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-medium hover:from-orange-700 hover:to-orange-800 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : '搜尋'}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">搜尋失敗</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}

            {!loading && candidates.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  搜尋結果（共 {candidates.length} 位）
                </h3>
                <CandidateList
                  candidates={candidates}
                  onSelectCandidate={onSelectCandidate}
                />
              </div>
            )}
          </div>
        )}

        {searchMode === 'location' && !constituency && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                輸入地址
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchAddress()}
                  placeholder="例如：銅鑼灣、中環、深水埗"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSearchAddress}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : '搜尋'}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">搜尋失敗</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {searchMode === 'browse' && !selectedConstituency && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">選擇選區類型</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['地方選區', '功能界別', '選舉委員會界別'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      selectedType === type
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
                <p className="text-gray-600">載入選區資料中...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">載入失敗</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            ) : constituencies.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-500">此類型暫無選區資料</p>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedConstituencies).map(([region, regionConstituencies]) => (
                  <div key={region} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                      <h3 className="text-xl font-bold text-white">{region}</h3>
                    </div>

                    <div className="p-4 space-y-2">
                      {regionConstituencies.map((constituency) => (
                        <button
                          key={constituency.id}
                          onClick={() => handleSelectConstituency(constituency)}
                          className="w-full text-left px-6 py-4 rounded-xl bg-gray-50 hover:bg-purple-50 hover:shadow-md transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                {constituency.name_zh}
                              </h4>
                              <p className="text-sm text-gray-600 mt-0.5">
                                {constituency.name_en}
                              </p>
                              {constituency.description && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {constituency.description}
                                </p>
                              )}
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {(constituency || selectedConstituency) && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>{(constituency || selectedConstituency)?.type}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-1">{(constituency || selectedConstituency)?.name_zh}</h2>
                  <p className="text-blue-100">{(constituency || selectedConstituency)?.name_en}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-2xl font-bold">{(constituency || selectedConstituency)?.seats}</span>
                  </div>
                  <p className="text-xs text-blue-100 mt-1">議席</p>
                </div>
              </div>

              {(constituency || selectedConstituency)?.description && (
                <p className="text-blue-50 text-sm mt-4">
                  {(constituency || selectedConstituency)?.description}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                候選人列表（共 {candidates.length} 位）
              </h3>

              {loading ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">載入候選人資料中...</p>
                </div>
              ) : candidates.length > 0 ? (
                <CandidateList
                  candidates={candidates}
                  onSelectCandidate={onSelectCandidate}
                />
              ) : (
                <div className="bg-white rounded-xl border-2 border-gray-200 p-12 text-center">
                  <p className="text-gray-500">本選區暫無候選人資料</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
