export interface IFontFamily {
  default: string;
  alternative: string;
}

export const fontFamily: IFontFamily = {
  default: 'poppins',
  alternative: 'roboto',
};

export type FontFamilyKeys = keyof typeof fontFamily;
export type FontFamilyType = FontFamilyKeys | string;
