import '../../assets/fonts/fonts.css';

import React from 'react';
import { DefaultTheme } from 'styled-components/dist/types';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../theme/config/globalStyles';

export const StyledThemeProvider: React.FC<{
  children: React.ReactNode;
  customTheme?: Partial<DefaultTheme>;
  customFonts?: string;
}> = ({ children, customTheme = {}, customFonts = '' }) => {
  const mergedTheme = { ...theme, ...customTheme };

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyle />
      {customFonts && <style>{customFonts}</style>}
      {children}
    </ThemeProvider>
  );
};

export const withThemeProvider = <T extends object>(
  Component: React.ComponentType<T>
) => {
  return (props: T) => (
    <StyledThemeProvider>
      <Component {...props} />
    </StyledThemeProvider>
  );
};
