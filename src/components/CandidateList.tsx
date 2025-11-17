import { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
import type { Candidate } from '../lib/supabase';

interface CandidateListProps {
  candidates: Candidate[];
  onSelectCandidate: (candidate: Candidate) => void;
}

export default function CandidateList({ candidates, onSelectCandidate }: CandidateListProps) {
  const [expandedConstituency, setExpandedConstituency] = useState<string | null>(null);

  const groupedCandidates = candidates.reduce((acc, candidate) => {
    if (!acc[candidate.constituency_zh]) {
      acc[candidate.constituency_zh] = [];
    }
    acc[candidate.constituency_zh].push(candidate);
    return acc;
  }, {} as Record<string, Candidate[]>);

  const toggleConstituency = (constituency: string) => {
    setExpandedConstituency(expandedConstituency === constituency ? null : constituency);
  };

  return (
    <div className="space-y-2">
      {Object.entries(groupedCandidates).map(([constituency, constituencyCandidates]) => (
        <div key={constituency} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleConstituency(constituency)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-semibold text-sm">
                  {constituencyCandidates.length}
                </span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">{constituency}</h3>
                <p className="text-sm text-gray-500">
                  {constituencyCandidates.length} 位候選人
                </p>
              </div>
            </div>
            {expandedConstituency === constituency ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedConstituency === constituency && (
            <div className="border-t border-gray-200 bg-gray-50">
              {constituencyCandidates.map((candidate) => (
                <button
                  key={candidate.id}
                  onClick={() => onSelectCandidate(candidate)}
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-semibold rounded">
                        {candidate.candidate_number}
                      </span>
                      <h4 className="font-semibold text-gray-900">{candidate.name_zh}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {candidate.affiliation || '獨立'} {candidate.occupation ? `· ${candidate.occupation}` : ''}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
