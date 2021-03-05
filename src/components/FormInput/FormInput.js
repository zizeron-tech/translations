import { useContext } from 'react';

import { TranslationsContext } from '../../lib/TranslationsProvider';

const FormInput = ({ placeholderTranslationTag }) => {
  const { getText } = useContext(TranslationsContext);
  const placeholderTranslationText = getText(placeholderTranslationTag);

  return <input placeholder={placeholderTranslationText} />
}

export default FormInput;