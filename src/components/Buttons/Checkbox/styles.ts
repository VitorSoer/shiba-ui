import styled, { css } from 'styled-components';
import { ICheckbox, ITick } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const Box = styled.div<ICheckbox>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $checkboxSize, $checkboxColor, $isDisabled }) => {
    const borderColor = $isDisabled
      ? theme.color.highlight
      : getColorValue(theme, $checkboxColor);

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};

      width: ${$checkboxSize}px;
      height: ${$checkboxSize}px;
      border-radius: ${theme.borderRadius.xs};
      border: 2px solid ${borderColor};
    `;
  }}
`;

export const Tick = styled.div<ITick>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme, $isChecked, $checkboxColor, $isDisabled }) => {
    const backgroundColor = $isDisabled
      ? theme.color.highlight
      : getColorValue(theme, $checkboxColor);

    return $isChecked ? backgroundColor : '#FFFFFF';
  }};
`;
