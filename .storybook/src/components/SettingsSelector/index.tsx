import React, { Fragment, useEffect, useState } from 'react';
import i18n from 'i18next';
import * as S from './styles';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';

const LANGUAGES = ['pt', 'en'];
const THEMES = ['light', 'dark', 'ocean'];

interface SettingsSelectorProps extends DocsContainerProps {}

export const SettingsSelector: React.FC<SettingsSelectorProps> = (props) => {
  const initialLanguage = i18n.language;
  const initialTheme = localStorage.getItem('theme') || 'light';

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [selectedTheme, setSelectedTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', selectedTheme);
  }, [selectedTheme]);

  const handleLanguageChange = (locale: string) => {
    i18n.changeLanguage(locale);
    setSelectedLanguage(locale);
    window.location.reload();
  };

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    window.location.reload();
  };

  return (
    <Fragment>
      <S.RowWrapper>
        <S.StyledSelect
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          {LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language.toUpperCase()}
            </option>
          ))}
        </S.StyledSelect>

        <S.StyledSelect
          value={selectedTheme}
          onChange={(e) => handleThemeChange(e.target.value)}
        >
          {THEMES.map((theme) => (
            <option key={theme} value={theme}>
              {theme.toUpperCase()}
            </option>
          ))}
        </S.StyledSelect>
      </S.RowWrapper>

      <DocsContainer {...props} />
    </Fragment>
  );
};
