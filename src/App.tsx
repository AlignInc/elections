import { useState } from 'react';
import ElectionHome from './pages/ElectionHome';
import CandidateSearch from './pages/CandidateSearch';
import IssueSearch from './pages/IssueSearch';
import VotingDayGuide from './pages/VotingDayGuide';
import ElectionInfo from './pages/ElectionInfo';
import CandidateDetail from './components/CandidateDetail';
import type { Candidate } from './lib/supabase';

type Page = 'home' | 'candidate-search' | 'issue' | 'voting-guide' | 'election-info';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedCandidate(null);
  };

  const handleSelectCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleBackFromCandidate = () => {
    setSelectedCandidate(null);
  };

  if (selectedCandidate) {
    return (
      <CandidateDetail
        candidate={selectedCandidate}
        onBack={handleBackFromCandidate}
      />
    );
  }

  switch (currentPage) {
    case 'candidate-search':
      return (
        <CandidateSearch
          onBack={() => handleNavigate('home')}
          onSelectCandidate={handleSelectCandidate}
        />
      );

    case 'issue':
      return (
        <IssueSearch
          onBack={() => handleNavigate('home')}
          onSelectCandidate={handleSelectCandidate}
        />
      );

    case 'voting-guide':
      return (
        <VotingDayGuide
          onBack={() => handleNavigate('home')}
        />
      );

    case 'election-info':
      return (
        <ElectionInfo
          onBack={() => handleNavigate('home')}
        />
      );

    default:
      return (
        <ElectionHome
          onNavigate={(page) => handleNavigate(page as Page)}
        />
      );
  }
}

export default App;
