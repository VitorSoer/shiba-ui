import styled, { css } from 'styled-components';
import { IIconProps } from './types';
import {
  getBoxShadowOrElevation,
  getColorValue,
} from '../../../functions/theme';

export const DocIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200px;
  padding: 0 16px;
  margin: 8px;

  border: 2px solid #121212;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background: #121212;
    transition: 0.15s ease-out;
  }
`;

export const IconWrapper = styled.div<IIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({
    theme,
    $variant,
    $background,
    $borderColor,
    $boxSize,
    $boxShadow,
    $elevation,
  }) => {
    const size = $boxSize ? `${$boxSize}px` : 'fit-content';
    const padding = $variant === 'icon' ? 0 : '12px';
    const background = getColorValue(theme, $background || 'primary');
    const borderColor = getColorValue(theme, $borderColor || 'primary');

    const variants = {
      circle: css`
        background: ${background};
        border-radius: 50%;
      `,
      circleOutlined: css`
        background: ${getColorValue(theme, $background || 'transparent')};
        border-radius: 50%;
        border: 2px solid ${borderColor};
      `,
      square: css`
        background: ${background};
        border-radius: 4px;
      `,
      squareOutlined: css`
        background: ${getColorValue(theme, $background || 'transparent')};
        border-radius: 4px;
        border: 2px solid ${borderColor};
      `,
    };

    return css`
      width: ${size};
      height: ${size};
      padding: ${padding};
      box-shadow: ${getBoxShadowOrElevation(theme, $elevation, $boxShadow)};
      ${variants[$variant]};
    `;
  }}
`;
