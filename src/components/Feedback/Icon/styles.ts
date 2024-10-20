import { IIconProps } from './types';
import styled, { css } from 'styled-components';
import { getBoxShadow, getColorValue } from '../../../utils/styles/theme';

export const IconWrapper = styled.div<IIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $variant, $background, $borderColor, $boxSize, $boxShadow }) => {
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
      box-shadow: ${getBoxShadow(theme, $boxShadow)};
      ${variants[$variant]};
    `;
  }}
`;
