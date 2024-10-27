import { ColorType } from '../../../theme/constants/color';
import { PartialIconProps } from '../../Feedback/Icon/types';

export interface ICheckbox extends PartialIconProps {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  $checkboxSize?: number;
  $checkboxColor?: ColorType;
}

export interface ITick extends ICheckbox {
  $isChecked?: boolean;
}
