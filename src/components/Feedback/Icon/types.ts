import * as iconList from '../../../assets/icons';
import { ColorType } from '../../../theme/constants/color';

export enum DefaultIconValues {
  Size = '20',
  ViewBox = '0 0 20 20',
  Color = 'primary',
  Icon = 'ErrorIcon',
}

export interface IIconProps {
  icon?: IconKeys;
  $iconSize?: number;
  $iconColor?: ColorType;
}

export interface IIconList {
  path: string[];
  view?: string;
}

export type IconKeys = keyof typeof iconList;
