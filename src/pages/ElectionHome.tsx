import { Search as SearchIcon, FileQuestion, ClipboardCheck, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ElectionCountdown from '../components/ElectionCountdown';
import LanguageToggle from '../components/LanguageToggle';

interface ElectionHomeProps {
  onNavigate: (page: 'candidate-search' | 'issue' | 'voting-guide' | 'election-info') => void;
}

export default function ElectionHome({ onNavigate }: ElectionHomeProps) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language.startsWith('zh');

  const features = [
    {
      id: 'candidate-search' as const,
      icon: SearchIcon,
      title: t('home.featureCandidateTitle'),
      description: t('home.featureCandidateDesc'),
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 'issue' as const,
      icon: FileQuestion,
      title: t('home.featureIssueTitle'),
      description: t('home.featureIssueDesc'),
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      id: 'voting-guide' as const,
      icon: ClipboardCheck,
      title: t('home.featureGuideTitle'),
      description: t('home.featureGuideDesc'),
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
    {
      id: 'election-info' as const,
      icon: Info,
      title: t('home.featureInfoTitle'),
      description: t('home.featureInfoDesc'),
      color: 'from-violet-500 to-violet-600',
      hoverColor: 'hover:from-violet-600 hover:to-violet-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        <div className="flex justify-end mb-4">
          <LanguageToggle />
        </div>
        <div className="text-center mb-4 sm:mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-2 sm:mb-4 shadow-lg">
            <span className="text-4xl sm:text-6xl">🗳️</span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-3">
            {isZh ? t('home.sloganTitle') : t('home.sloganSubtitle')}
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.description')}
          </p>
        </div>

        <div className="mb-4 sm:mb-10">
          <ElectionCountdown />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="p-4 sm:p-8 text-center sm:text-left">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-2 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="hidden sm:block text-gray-600 text-sm leading-relaxed mt-2">
                    {feature.description}
                  </p>

                  <div className="hidden sm:flex mt-4 sm:mt-6 items-center text-blue-600 font-medium text-sm">
                    <span>{t('home.getStarted')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-blue-600">📋</span>
            {t('home.aboutTitle')}
          </h3>
          <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <p>
              • {t('home.aboutLine1')}
            </p>
            <p>
              • {t('home.aboutLine2')}
            </p>
            <p>
              • {t('home.aboutLine3')}
            </p>
            <p className="pt-2 text-xs text-gray-500">
              {t('home.aboutFooter')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
