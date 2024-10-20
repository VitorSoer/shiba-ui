export interface IColor {
  background: string;
  section: string;
  highlight: string;
  accent: string;
  content: string;
  primary: string;
  secondary: string;
  alternative: string;
  success: string;
  warning: string;
  error: string;
}

export const color: IColor = {
  background: '#F5F5FB',
  section: '#FBFBFB',
  highlight: '#D5D5D5',
  accent: '#A5A5A5',
  content: '#151515',
  primary: '#7F2BFF',
  secondary: '#486DF7',
  alternative: '#EF5975',
  success: '#0EB75A',
  warning: '#E0B02C',
  error: '#C33336',
};

export const darkThemeColors: Partial<IColor> = {
  background: '#121212',
  section: '#181818',
  highlight: '#505050',
  accent: '#808080',
  content: '#FFFFFF',
};

export const oceanThemeColors: Partial<IColor> = {
  background: '#151B30',
  section: '#2F3652',
  highlight: '#B5B5B5',
  accent: '#2B2B35',
  content: '#F7F7F7',
};

export type ColorKeys = keyof typeof color;
export type ColorType = ColorKeys | string;
