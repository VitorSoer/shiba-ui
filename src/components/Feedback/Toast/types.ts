import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { ColorType } from '../../../theme/constants/color';

export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  id?: string;
  message?: string;
  timeout?: number;

  $variant?: ToastType;
  $background?: ColorType;
  $messageColor?: ColorType;
  $borderColor?: ColorType;
  $width?: number;
  $height?: number;
  $borderRadius?: BorderRadiusType;
}
