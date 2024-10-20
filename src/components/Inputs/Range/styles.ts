import styled, { css } from 'styled-components';
import { IRange } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const InputRange = styled.input<IRange & { $percentage: number }>`
  -webkit-appearance: none;
  appearance: none;

  ${({
    theme,
    $width,
    $fullWidth,
    $thumbColor,
    $background,
    $trackColor,
    $percentage,
    $thumbSize = 18,
    $height = 8,
  }) => {
    const background = getColorValue(theme, $background || 'highlight');
    const trackColor = getColorValue(theme, $trackColor || 'primary');

    const getThumbStyle = () => css`
      cursor: pointer;
      border-radius: 50%;
      width: ${$thumbSize}px;
      height: ${$thumbSize}px;
      background: ${getColorValue(theme, $thumbColor || 'primary')};
    `;

    return css`
      height: ${$height}px;
      width: ${$fullWidth ? '100%' : $width ? `${$width}px` : '200px'};
      border-radius: ${theme.borderRadius.md};

      background: linear-gradient(
        90deg,
        ${trackColor} ${$percentage}%,
        ${background} ${$percentage}%
      );

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${getThumbStyle()}
      }

      &::-moz-range-thumb {
        ${getThumbStyle()}
      }

      &::-ms-thumb {
        ${getThumbStyle()}
      }
    `;
  }}
`;
