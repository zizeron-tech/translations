import { useContext } from 'react';
import { TranslationsContext } from '../../lib/TranslationsProvider';

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(TranslationsContext);

  const handleSelectLanguage = e => {
    setLanguage(e.target.value);    
  }

  return (
    <select value={language} onChange={handleSelectLanguage}>
      <option value='es'>ES</option>
      <option value='en'>EN</option>
    </select>
  )

}

export default LanguageSelector;