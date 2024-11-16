import { ColorType } from '../../../theme/constants/color';
import { SpacingType } from '../../../theme/constants/spacing';

export interface IRating {
  rating?: number;
  maxStars?: number;
  readonly?: boolean;
  handleChange?: (rating: number) => void;

  $ratingSize?: number;
  $gap?: SpacingType;
  $ratingBaseColor?: ColorType;
  $ratingFillColor?: ColorType;
}
