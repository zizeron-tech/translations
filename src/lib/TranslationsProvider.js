import { useState, createContext } from 'react';

export const TranslationsContext = createContext({});

const TranslationsProvider = ({ children, translations }) => {
  const [language, setLanguage] = useState('es');

  const getText = (tag, props) => {
    const translationValue = translations?.[language]?.[tag];

    if (!translationValue) return `¡¡¡MISSING_TRANSLATION (${tag}) !!!`;

    if (typeof translationValue === 'string') return translationValue;

    return translationValue(props);
  }

  return (
    <TranslationsContext.Provider
      value={{
        language,
        setLanguage,
        getText
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
}

export default TranslationsProvider;
