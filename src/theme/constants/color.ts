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
  background: '#F5F5F5',
  section: '#FFFFFF',
  highlight: '#C5C5C5',
  accent: '#A8A8A8',
  content: '#121212',
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


export type ColorKeys = keyof typeof color;
export type ColorType = ColorKeys | string;

