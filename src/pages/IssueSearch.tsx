import { useState, useEffect } from 'react';
import { ArrowLeft, Search, Loader2, AlertCircle, FileText, ExternalLink, User } from 'lucide-react';
import { searchService, type IssueSearchResult } from '../services/searchService';
import { policyService } from '../services/policyService';
import { candidateService } from '../services/candidateService';
import type { TopicTag, Candidate } from '../lib/supabase';

interface IssueSearchProps {
  onBack: () => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

export default function IssueSearch({ onBack, onSelectCandidate }: IssueSearchProps) {
  const [queryText, setQueryText] = useState('');
  const [topicTags, setTopicTags] = useState<TopicTag[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [results, setResults] = useState<IssueSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    loadTopicTags();
  }, []);

  const loadTopicTags = async () => {
    try {
      const data = await policyService.getAllTopicTags();
      setTopicTags(data);
    } catch (err) {
      console.error('載入議題標籤失敗:', err);
    }
  };

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId) ? prev.filter((id) => id !== topicId) : [...prev, topicId]
    );
  };

  const handleSearch = async () => {
    if (!queryText.trim() && selectedTopics.length === 0) {
      setError('請輸入關鍵詞或選擇至少一個議題標籤。');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await searchService.searchByIssue({
        queryText,
        topicFilters: selectedTopics
      });

      setResults(data);
    } catch (err) {
      setError('搜尋失敗，請稍後再試。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQueryText('');
    setSelectedTopics([]);
    setResults([]);
    setError(null);
    setHasSearched(false);
  };

  const userConstituencyResults = results.filter((r) => r.is_user_constituency);
  const otherResults = results.filter((r) => !r.is_user_constituency);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 shadow-lg">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            按議題關鍵詞查找政綱
          </h1>
          <p className="text-gray-600">
            輸入你關心的議題，找出相關候選人的政綱內容。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                輸入你關心的議題或問題
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="例如：公屋輪候時間、基層醫療、托兒服務"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-lg"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                或選擇議題標籤（可多選）
              </label>
              <div className="flex flex-wrap gap-2">
                {topicTags.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => toggleTopic(topic.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                      selectedTopics.includes(topic.id)
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    disabled={loading}
                  >
                    <span>{topic.icon}</span>
                    <span>{topic.name_zh}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                disabled={loading || (!queryText.trim() && selectedTopics.length === 0)}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>搜尋中...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>搜尋政綱</span>
                  </>
                )}
              </button>

              {hasSearched && (
                <button
                  onClick={handleReset}
                  className="px-6 py-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                  重置
                </button>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>

        {hasSearched && !loading && (
          <div className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
              <p className="text-blue-900 text-sm leading-relaxed">
                ⚠️ {searchService.getDisclaimer()}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">未找到相關政綱內容</p>
                <p className="text-gray-400 text-sm">請嘗試使用不同的關鍵詞或議題標籤。</p>
              </div>
            ) : (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      搜尋結果
                    </h2>
                    <span className="text-sm text-gray-600">
                      共找到 {results.length} 位候選人
                    </span>
                  </div>

                  {userConstituencyResults.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-green-600">📍</span>
                        你所屬選區
                      </h3>
                      <div className="space-y-4">
                        {userConstituencyResults.map((result) => (
                          <ResultCard
                            key={result.candidate.id}
                            result={result}
                            onSelectCandidate={onSelectCandidate}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {otherResults.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span>📋</span>
                        {userConstituencyResults.length > 0 ? '其他選區' : '所有選區'}
                      </h3>
                      <div className="space-y-4">
                        {otherResults.map((result) => (
                          <ResultCard
                            key={result.candidate.id}
                            result={result}
                            onSelectCandidate={onSelectCandidate}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface ResultCardProps {
  result: IssueSearchResult;
  onSelectCandidate: (candidate: Candidate) => void;
}

function ResultCard({ result, onSelectCandidate }: ResultCardProps) {
  const [loadingCandidate, setLoadingCandidate] = useState(false);

  const handleSelectCandidate = async () => {
    setLoadingCandidate(true);
    try {
      const fullCandidate = await candidateService.getCandidateById(result.candidate.id);
      if (fullCandidate) {
        onSelectCandidate(fullCandidate);
      } else {
        alert('無法載入候選人資料，請稍後再試');
      }
    } catch (err) {
      console.error('載入候選人資料失敗:', err);
      alert('載入候選人資料失敗，請稍後再試');
    } finally {
      setLoadingCandidate(false);
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
            <User className="w-8 h-8 text-gray-500" />
          </div>

          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              {result.candidate.name_zh}
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              {result.candidate.name_en}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                {result.candidate.constituency.name_zh}
              </span>
              {result.candidate.party_affiliation && (
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {result.candidate.party_affiliation}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleSelectCandidate}
            disabled={loadingCandidate}
            className="flex-shrink-0 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loadingCandidate ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>載入中</span>
              </>
            ) : (
              <span>查看詳情</span>
            )}
          </button>
        </div>

        {result.matched_topics.length > 0 && (
          <div className="mb-4">
            <h5 className="text-xs font-medium text-gray-500 mb-2">匹配議題：</h5>
            <div className="flex flex-wrap gap-2">
              {result.matched_topics.map((topic) => (
                <span
                  key={topic.id}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded"
                >
                  <span>{topic.icon}</span>
                  <span>{topic.name_zh}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          {result.policy_snippets.map((snippet) => (
            <div key={snippet.policy_id} className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-2">{snippet.title}</h5>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {snippet.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>最後更新：{snippet.last_updated}</span>
                {snippet.source_url && (
                  <a
                    href={snippet.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
                  >
                    <span>查看原文</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
