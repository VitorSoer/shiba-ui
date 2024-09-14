export interface IColor {
  obsidian: string;
  charcoal: string;
  graphite: string;
  steel: string;
  silver: string;
  quartz: string;
  porcelain: string;
  cotton: string;
  primary: string;
  secondary: string;
  alternative: string;
  highlight: string;
  neutral: string;
  success: string;
  warning: string;
  error: string;
}

export const color: IColor = {
  obsidian: '#121212',
  charcoal: '#181818',
  graphite: '#404040',
  steel: '#9C9C9C',
  silver: '#C5C5C5',
  quartz: '#E4E4E4',
  porcelain: '#F5F5F5',
  cotton: '#FFFFFF',
  primary: '#9149F9',
  secondary: '#00BEE0',
  alternative: '#EF5975',
  highlight: '#F88400',
  neutral: '#3676AA',
  success: '#00C948',
  warning: '#F2C703',
  error: '#D02329',
};

export type ColorKeys = keyof typeof color;
export type ColorType = ColorKeys | string;
