import { ColorType } from '../../../theme/constants/color';

export interface ITooltip {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';

  $backgroundColor?: ColorType;
  $textColor?: ColorType;
  isHidden?: boolean;
}

export interface ITooltipContainer {
  $position: ITooltip['position'];
  $backgroundColor?: ColorType;
  $isHidden: boolean;
}
