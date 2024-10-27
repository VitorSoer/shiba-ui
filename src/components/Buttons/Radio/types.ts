import { ColorType } from '../../../theme/constants/color';

export interface IRadio {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  $radioSize?: number;
  $radioColor?: ColorType;
  $isDisabled?: boolean;
  isHidden?: boolean;
}

export interface ITick extends IRadio {
  $isChecked?: boolean;
}
