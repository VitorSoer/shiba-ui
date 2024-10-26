import styled, { css } from 'styled-components';
import { ITextDisplay } from './types';
import {
  getColorValue,
  getFontSize,
  getFontWeight,
} from '../../../utils/styles/theme';

export const TextWrapper = styled.p<ITextDisplay>`
  ${({
    theme,
    $textColor,
    $fontSize,
    $fontFamily,
    $fontWeight,
    $textAlign,
    $lineHeight,
    $letterSpacing,
    $textDecoration,
  }) => css`
    line-height: ${$lineHeight ? `${$lineHeight}px` : 'normal'};
    letter-spacing: ${$letterSpacing + 'px' || 'normal'};
    text-align: ${$textAlign || 'left'};
    text-decoration: ${$textDecoration || 'none'};
    font-size: ${getFontSize(theme, $fontSize || 'md')};
    color: ${getColorValue(theme, $textColor || 'content')};
    font-weight: ${getFontWeight(theme, $fontWeight || 'regular')};
    font-family: ${theme.fontFamily[$fontFamily || 'default'] || 'Times New Roman'};

    word-break: break-word;
    overflow-wrap: anywhere;
  `}
`;

