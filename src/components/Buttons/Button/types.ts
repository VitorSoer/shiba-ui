import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { BorderWidthType } from '../../../theme/constants/borderWidth';
import { BoxShadowType } from '../../../theme/constants/boxShadow';
import { ColorType } from '../../../theme/constants/color';
import { IconKeys, PartialIconProps } from '../../Feedback/Icon/types';
import { ISpinner } from '../../Feedback/Spinner/types';
import { ITextDisplay } from '../../TextElements/TextDisplay/types';

export interface IButton extends ITextDisplay, ISpinner, PartialIconProps {
  onClick?: () => void;
  rightIcon?: IconKeys;
  isLoading?: boolean;
  isHidden?: boolean;
  leftIcon?: IconKeys;

  $variant?: 'solid' | 'outlined' | 'text';
  $width?: number;
  $height?: number;
  $buttonColor?: ColorType;
  $borderColor?: ColorType;
  $borderWidth?: BorderWidthType;
  $borderRadius?: BorderRadiusType;
  $boxShadow?: BoxShadowType;
  $isDisabled?: boolean;
  $padding?: string;
  $gap?: string;
  $fullWidth?: boolean;
}
