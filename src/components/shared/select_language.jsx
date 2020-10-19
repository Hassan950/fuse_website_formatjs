import React from 'react';
import classNames from 'classnames'
import { useLang } from './lang_provider';

const SelectLanguage = ({isNetworkHeader, isOpen}) => {
  const [lang, setLang] = useLang();
  return <a rel="noreferrer noopener" className={classNames('icon', { 'language': (!isNetworkHeader || isOpen), 'language--white': isNetworkHeader && !isOpen })} target='_blank'
    onClick={() => setLang(prevLang => prevLang === 'en' ? 'zh' : 'en')} />;
}

export default SelectLanguage;