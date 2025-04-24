import './LanguageSelectorC.css';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
  <button onClick={() => changeLanguage('es')}>ES</button>
  <button onClick={() => changeLanguage('en')}>EN</button>
</div>

  );
}

export default LanguageSelector; 
