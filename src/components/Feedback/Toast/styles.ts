import styled, { css, keyframes } from 'styled-components';
import { IToast } from './types';
import { getBorderRadius, getColorValue } from '../../../utils/styles/theme';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const getBorderColor = (theme, $variant, $lineColor) => {
  if ($lineColor) return getColorValue(theme, $lineColor);

  return theme.color[$variant];
};

export const ToastContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: ${({ theme }) => theme.spacing.sm};

  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
`;

export const ToastItem = styled.div<IToast & { $isExiting: boolean }>`
  ${({
    theme,
    $width,
    $height,
    $variant,
    $borderColor,
    $isExiting,
    $borderRadius = 'xs',
    $background = 'section',
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 12px;

    box-shadow: ${theme.boxShadow.xs};
    background: ${getColorValue(theme, $background)};

    padding: 12px;

    width: ${$width}px;
    height: ${$height ? `${$height}px` : 'auto'};

    min-height: 40px;
    min-width: 280px;

    border-left-width: 10px;
    border-left-style: solid;
    border-left-color: ${getBorderColor(theme, $variant, $borderColor)};
    border-radius: ${getBorderRadius(theme, $borderRadius)};

    animation: ${$isExiting ? slideOut : slideIn} 0.3s ease-in-out;
  `}
`;

export const CloseIcon = styled.div`
  cursor: pointer;

  &:hover {
    filter: brightness(75%);
    transition: filter 0.25s ease;
  }
`;
