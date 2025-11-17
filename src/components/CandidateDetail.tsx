import { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Globe, Share2, FileText, ExternalLink, Users } from 'lucide-react';
import type { Candidate, TopicTag } from '../lib/supabase';
import { policyService } from '../services/policyService';

interface CandidateDetailProps {
  candidate: Candidate;
  onBack: () => void;
}

export default function CandidateDetail({ candidate, onBack }: CandidateDetailProps) {
  const [topicTags, setTopicTags] = useState<TopicTag[]>([]);
  const [loadingTopics, setLoadingTopics] = useState(true);

  useEffect(() => {
    loadTopicTags();
  }, [candidate.id]);

  const loadTopicTags = async () => {
    try {
      setLoadingTopics(true);
      const tags = await policyService.getTopicTagsByCandidate(candidate.id);
      setTopicTags(tags);
    } catch (err) {
      console.error('載入議題標籤失敗:', err);
    } finally {
      setLoadingTopics(false);
    }
  };

  const handleShare = async () => {
    const shareText = `${candidate.name_zh} - ${candidate.constituency_zh}選區候選人
候選人編號：${candidate.candidate_number}
政治背景：${candidate.party_affiliation || candidate.affiliation || '獨立候選人'}
${candidate.occupation ? `職業：${candidate.occupation}` : ''}`;

    try {
      if (navigator.share && navigator.canShare) {
        await navigator.share({
          title: `${candidate.name_zh} - 2025立法會候選人`,
          text: shareText
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('候選人資料已複製到剪貼簿！');
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        try {
          await navigator.clipboard.writeText(shareText);
          alert('候選人資料已複製到剪貼簿！');
        } catch (clipboardErr) {
          console.error('分享失敗', clipboardErr);
          alert('分享功能暫時無法使用，請稍後再試。');
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="bg-white shadow-md sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">返回</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Share2 className="w-4 h-4" />
            <span className="font-medium">分享</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                <User className="w-16 h-16 text-gray-400" />
              </div>
              <div className="flex-1 text-white text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-blue-700 text-lg font-bold rounded-lg shadow-md">
                    {candidate.candidate_number}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold">{candidate.name_zh}</h1>
                </div>
                <p className="text-blue-100 text-xl mb-2">{candidate.name_en}</p>
                <p className="text-blue-50 text-lg font-medium">{candidate.constituency_zh}選區</p>
                <p className="text-blue-200 text-sm">{candidate.constituency_en}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {candidate.age && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <h3 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    年齡 Age
                  </h3>
                  <p className="text-gray-900 font-medium">{candidate.age}歲</p>
                </div>
              )}

              {candidate.occupation && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <h3 className="text-sm font-semibold text-green-900 mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    職業 Occupation
                  </h3>
                  <p className="text-gray-900 font-medium">{candidate.occupation}</p>
                </div>
              )}

              {(candidate.party_affiliation || candidate.affiliation) && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 sm:col-span-2">
                  <h3 className="text-sm font-semibold text-purple-900 mb-1">
                    政治背景 Political Affiliation
                  </h3>
                  <p className="text-gray-900 font-medium">
                    {candidate.party_affiliation || candidate.affiliation || '獨立候選人'}
                  </p>
                </div>
              )}
            </div>

            {candidate.electoral_message && (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  競選簡介 Electoral Message
                </h2>

                {!loadingTopics && topicTags.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-xs font-medium text-gray-500 mb-2">相關議題：</h5>
                    <div className="flex flex-wrap gap-2">
                      {topicTags.map((topic) => (
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

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {candidate.electoral_message}
                  </p>
                </div>
              </div>
            )}

            {(candidate.platform_pdf_url || candidate.source_gc_intro_page) && (
              <div className="border-t-2 border-gray-200 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">官方資料連結</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {candidate.platform_pdf_url && (
                    <a
                      href={candidate.platform_pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl hover:bg-red-100 hover:border-red-300 transition-all group"
                    >
                      <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm">候選人簡介 PDF</p>
                        <p className="text-xs text-gray-600">Candidate Profile</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}

                  {candidate.source_gc_intro_page && (
                    <a
                      href={candidate.source_gc_intro_page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 transition-all group"
                    >
                      <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm">選區候選人介紹</p>
                        <p className="text-xs text-gray-600">Constituency Page</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {(candidate.email || candidate.website) && (
              <div className="border-t-2 border-gray-200 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">聯絡方式</h2>
                <div className="space-y-3">
                  {candidate.email && (
                    <a
                      href={`mailto:${candidate.email}`}
                      className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all"
                    >
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium break-all">{candidate.email}</span>
                    </a>
                  )}
                  {candidate.website && (
                    <a
                      href={candidate.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all group"
                    >
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900 font-medium break-all flex-1">{candidate.website}</span>
                      <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900 mb-1">
                投票日期：2025 年 12 月 7 日（星期日）
              </p>
              <p className="text-sm text-blue-800 mb-2">
                投票時間：上午7:30至晚上10:30
              </p>
              <p className="text-xs text-blue-700">
                以上資料由候選人提供，並整理自香港選舉管理委員會官方網站。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
