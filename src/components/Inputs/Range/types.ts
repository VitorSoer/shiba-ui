import { ColorType } from '../../../theme/constants/color';

export interface IRange {
  value: number;
  min?: number;
  max?: number;
  handleChange?: (range: number) => void;

  $width?: number;
  $height?: number;
  $fullWidth?: boolean;
  $background?: ColorType;
  $trackColor?: ColorType;
  $thumbColor?: ColorType;
  $thumbSize?: number;
}
