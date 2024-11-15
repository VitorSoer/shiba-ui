import { generateBlinkAnimation } from '../../../utils/styles/animations';
import { getBorderRadius, getColorValue } from '../../../utils/styles/theme';
import { ISkeleton } from './types';
import styled, { css } from 'styled-components';

export const SkeletonWrapper = styled.div<ISkeleton>`
  ${({
    theme,
    $skeletonColor = 'highlight',
    $borderRadius = 'xs',
    $skeletonHeight = 50,
    $skeletonWidth = 50,
    $isFullSize = false,
  }) => css`
    width: ${$isFullSize ? '100%' : `${$skeletonWidth}px`};
    height: ${$isFullSize ? '100%' : `${$skeletonHeight}px`};

    background: ${getColorValue(theme, $skeletonColor)};
    border-radius: ${getBorderRadius(theme, $borderRadius)};

    ${generateBlinkAnimation()};
  `}
`;
