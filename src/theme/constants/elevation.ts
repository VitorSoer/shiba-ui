export interface IElevation {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export const elevation: IElevation = {
  rm: 'none',
  xs: '0px 1px 4px rgba(0, 0, 0, 0.2)',
  sm: '0px 2px 6px rgba(0, 0, 0, 0.2)',
  md: '0px 3px 8px rgba(0, 0, 0, 0.2)',
  lg: '0px 4px 10px rgba(0, 0, 0, 0.2)',
};

export type ElevationKeys = keyof typeof elevation;
export type ElevationType = ElevationKeys | string;
