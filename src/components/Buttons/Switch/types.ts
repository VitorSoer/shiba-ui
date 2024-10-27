import { ColorType } from '../../../theme/constants/color';

export interface ISwitch {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  $switchSize?: number;
  $switchEnabledColor?: ColorType;
  $switchDisabledColor?: ColorType;
  $isDisabled?: boolean;
  isHidden?: boolean;
}

export interface ICircle extends ISwitch {
  $isChecked?: boolean;
}
