import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import VotingChecklist from '../components/VotingChecklist';
import VotingSteps from '../components/VotingSteps';
import DocumentRequirements from '../components/DocumentRequirements';
import VotingFAQ from '../components/VotingFAQ';

interface VotingDayGuideProps {
  onBack: () => void;
}

export default function VotingDayGuide({ onBack }: VotingDayGuideProps) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language.startsWith('zh');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{t('common.backHome')}</span>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl sm:text-4xl">📋</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('votingDay.title')}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            {t('votingDay.subtitle')}
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('votingDay.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {t('votingDay.dateLabel')}
                </p>
                <p className="font-bold text-gray-900">
                  {isZh ? t('votingDay.dateValueZh') : t('votingDay.dateValueEn')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {t('votingDay.timeLabel')}
                </p>
                <p className="font-bold text-gray-900">
                  {t('votingDay.timeValue')}
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www1.voterinfo.gov.hk/bd_reovi/OVIES/jsp/web/regulations.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md border-2 border-purple-200 p-5 hover:bg-purple-50 hover:border-purple-300 transition-all group block"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    {t('votingDay.placeLabel')}
                  </p>
                  <p className="font-bold text-gray-900">
                    {isZh ? t('votingDay.placeValueZh') : t('votingDay.placeValueEn')}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="space-y-6">
          <VotingChecklist />

          <DocumentRequirements />

          <VotingSteps />

          <VotingFAQ />

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-3">
              {t('votingDay.noticeTitle')}
            </h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>• {t('votingDay.noticeItems.item1')}</p>
              <p>• {t('votingDay.noticeItems.item2')}</p>
              <p>• {t('votingDay.noticeItems.item3')}</p>
              <p>• {t('votingDay.noticeItems.item4')}</p>
              <p>• {t('votingDay.noticeItems.item5')}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-500">
              <p className="text-xs text-blue-100">
                {t('votingDay.noticeFooter')}
              </p>
            </div>
          </div>

          <a
            href="https://www.elections.gov.hk/legco2025/chi/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-5 text-center hover:bg-gray-50 hover:border-gray-300 transition-all group block"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-sm text-gray-600">
                {isZh ? t('votingDay.moreInfoZh') : t('votingDay.moreInfoEn')}
              </p>
              <ExternalLink className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
