import { useState, useEffect } from 'react';
import { ArrowLeft, Building2, Loader2, AlertCircle, ChevronRight } from 'lucide-react';
import { constituencyService } from '../services/constituencyService';
import type { Constituency, Candidate } from '../lib/supabase';
import CandidateList from '../components/CandidateList';

interface ConstituencyBrowseProps {
  onBack: () => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

export default function ConstituencyBrowse({ onBack, onSelectCandidate }: ConstituencyBrowseProps) {
  const [selectedType, setSelectedType] = useState<string>('地方選區');
  const [constituencies, setConstituencies] = useState<Constituency[]>([]);
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConstituencies();
  }, [selectedType]);

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

  const handleBackToList = () => {
    setSelectedConstituency(null);
    setCandidates([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={selectedConstituency ? handleBackToList : onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            按選區瀏覽候選人
          </h1>
          <p className="text-gray-600">
            選擇具體選區，瀏覽該選區所有候選人的詳細資料
          </p>
        </div>

        {!selectedConstituency ? (
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
        ) : (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedConstituency.type}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-1">{selectedConstituency.name_zh}</h2>
                  <p className="text-purple-100">{selectedConstituency.name_en}</p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
                    <span className="text-2xl font-bold">{selectedConstituency.seats}</span>
                  </div>
                  <p className="text-xs text-purple-100 mt-1">議席</p>
                </div>
              </div>

              {selectedConstituency.description && (
                <p className="text-purple-50 text-sm mt-4">
                  {selectedConstituency.description}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                候選人列表（共 {candidates.length} 位，按姓名排序）
              </h3>

              {loading ? (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
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
