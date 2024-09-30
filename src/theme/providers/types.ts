import { DefaultTheme } from 'styled-components/dist/types';

export interface IStyledProvider {
  children: React.ReactNode;
  customTheme?: Partial<DefaultTheme>;
  customFonts?: string;
  themeVariant?: 'light' | 'dark';
}
