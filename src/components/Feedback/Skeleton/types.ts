import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { ColorType } from '../../../theme/constants/color';

export interface ISkeleton {
  $skeletonWidth?: number;
  $skeletonHeight?: number;
  $skeletonColor?: ColorType;
  $borderRadius?: BorderRadiusType;
  $isFullSize?: boolean;
}
