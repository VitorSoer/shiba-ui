export interface ISpacing {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2x': string;
  '3x': string;
  '4x': string;
  '5x': string;
}

export const spacing: ISpacing = {
  rm: '0px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  '2x': '48px',
  '3x': '56px',
  '4x': '64px',
  '5x': '72px',
};

export type SpacingKeys = keyof typeof spacing;
export type SpacingType = SpacingKeys | string;
