import { ColorType } from '../../../theme/constants/color';
import { FontFamilyType } from '../../../theme/constants/fontFamily';
import { FontSizeType } from '../../../theme/constants/fontSize';
import { FontWeightType } from '../../../theme/constants/fontWeight';

export type TextAlignmentType = 'left' | 'center' | 'right' | 'justify';

export interface ITextDisplay {
  text?: string;
  isHidden?: boolean;
  $textColor?: ColorType;
  $textDecoration?: string;
  $textAlign?: TextAlignmentType;
  $fontSize?: FontSizeType;
  $fontFamily?: FontFamilyType;
  $fontWeight?: FontWeightType;
  $lineHeight?: number;
  $letterSpacing?: number;
}
