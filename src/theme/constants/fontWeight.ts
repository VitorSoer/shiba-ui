export interface IFontWeight {
  light: number;
  regular: number;
  medium: number;
  strong: number;
  bold: number;
  heavy: number;
}

export const fontWeight: IFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  strong: 600,
  bold: 700,
  heavy: 800,
};

export type FontWeightKeys = keyof typeof fontWeight;
export type FontWeightType = FontWeightKeys | string;
