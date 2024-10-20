import * as iconList from '../../../assets/icons';
import { BoxShadowType } from '../../../theme/constants/boxShadow';
import { ColorType } from '../../../theme/constants/color';

export enum DefaultIconValues {
  Size = '20',
  ViewBox = '0 0 20 20',
  Color = 'primary',
  Icon = 'ForwardIcon',
}

export interface IIconProps {
  icon?: IconKeys;
  onClick?: () => void;

  $iconSize?: number;
  $boxSize?: number;
  $iconColor?: ColorType;
  $borderColor?: ColorType;
  $background?: ColorType;
  $variant?: 'icon' | 'circle' | 'square' | 'circleOutlined' | 'squareOutlined';
  $boxShadow?: BoxShadowType;
}

export interface IIconList {
  path: string[];
  view?: string;
}

export type IconKeys = keyof typeof iconList;
export type PartialIconProps = Pick<IIconProps, 'icon' | '$iconSize' | '$iconColor'>
