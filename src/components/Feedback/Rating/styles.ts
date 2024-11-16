import styled, { css } from 'styled-components';
import { IRating } from './types';
import { getColorValue, getSpacing } from '../../../utils/styles/theme';

export const RatingContainer = styled.div<IRating>`
  display: flex;
  align-items: center;
  gap: ${({ theme, $gap }) => getSpacing(theme, $gap)};
`;

export const StarContainer = styled.div<IRating & { $interactive?: boolean }>`
  ${({ $size, $interactive }) => css`
    position: relative;
    display: inline-block;

    width: ${$size}px;
    height: ${$size}px;
    cursor: ${$interactive ? 'pointer' : 'default'};

    ${$interactive &&
    css`
      &:hover > div {
        filter: brightness(1.35);
        transition: filter 0.3s ease;
      }
    `}
  `}
`;

export const baseStar = css<IRating>`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1;
  font-size: ${({ $size }) => $size}px;
  transition: all 0.2s ease-in-out;
`;

export const StarBase = styled.div<IRating>`
  ${baseStar}

  color: ${({ theme, $baseColor }) => getColorValue(theme, $baseColor)};
`;

export const StarFill = styled.div<IRating & { $fillPercentage: number }>`
  ${baseStar}

  ${({ theme, $fillPercentage, $fillColor }) => css`
    clip-path: ${`inset(0 ${100 - $fillPercentage}% 0 0)`};
    color: ${getColorValue(theme, $fillColor)};
  `}
`;

export const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
