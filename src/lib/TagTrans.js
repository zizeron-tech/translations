import { useContext } from 'react';
import { TranslationsContext } from './TranslationsProvider';

const TagTrans = ({ tag, ...props }) => {
  const { getText } = useContext(TranslationsContext);
  return (
    <span>{getText(tag, props)}</span>
  )
}

export default TagTrans;