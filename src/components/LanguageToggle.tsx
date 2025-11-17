import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation('translation');
  const current = i18n.language || 'zh';

  const handleChange = (lang: 'zh' | 'en') => {
    if (lang !== current) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div className="inline-flex items-center rounded-full bg-white/90 shadow border border-gray-200 text-xs sm:text-sm px-1 py-0.5">
      <button
        type="button"
        onClick={() => handleChange('zh')}
        className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${
          current.startsWith('zh')
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {t('languageToggle.zhLabel')}
      </button>
      <button
        type="button"
        onClick={() => handleChange('en')}
        className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${
          current === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {t('languageToggle.enLabel')}
      </button>
    </div>
  );
}

