import styled, { css } from 'styled-components';
import { ICircle } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const Container = styled.div<ICircle>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${({
    theme,
    $switchSize,
    $switchDisabledColor,
    $switchEnabledColor,
    $isChecked,
    $isDisabled,
  }) => {
    const determineSwitchColor = () => {
      if ($isDisabled) return theme.color.highlight;

      return $isChecked
        ? getColorValue(theme, $switchEnabledColor)
        : getColorValue(theme, $switchDisabledColor);
    };

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};

      height: ${$switchSize}px;
      width: ${$switchSize * 2}px;
      border-radius: ${$switchSize / 2}px;
      background: ${determineSwitchColor()};
    `;
  }}
`;

export const Circle = styled.div<ICircle>`
  position: absolute;
  transition: all 0.3s ease-in-out;

  ${({ $isChecked, $isDisabled }) => css`
    aspect-ratio: 1;
    border-radius: 50%;
    width: calc(50% - 6px);
    background: ${$isDisabled ? '#D5D5D5' : '#F5F5FB'};
    left: ${$isChecked ? 'calc(100% - calc(50% - 4px))' : '4px'};
  `}
`;
