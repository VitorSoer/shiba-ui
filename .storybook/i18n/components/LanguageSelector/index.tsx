import i18n from 'i18next';
import * as S from './styles';
import React, { Fragment, useState } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';

interface LanguageSelectorProps extends DocsContainerProps {}

const languages = [
  { code: 'pt', label: 'PT', selected: 'Português' },
  { code: 'en', label: 'EN', selected: 'English' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (locale: string) => {
    i18n.changeLanguage(locale);
    setSelectedLanguage(locale);
    window.location.reload();
  };

  return (
    <Fragment>
      <S.LanguageSelectorWrapper>
        {languages.map(({ code, label, selected }) => (
          <S.LanguageButton
            key={code}
            $isActive={selectedLanguage === code}
            onClick={() => handleLanguageChange(code)}
          >
            {selectedLanguage == code ? selected : label}
          </S.LanguageButton>
        ))}
      </S.LanguageSelectorWrapper>

      <DocsContainer {...props} />
    </Fragment>
  );
};

export default LanguageSelector;
