import styled, { css } from 'styled-components';
import { ICheckbox, ITick } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const Box = styled.div<ICheckbox>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $checkboxSize, $checkboxColor }) => css`
    width: ${$checkboxSize}px;
    height: ${$checkboxSize}px;
    border-radius: ${theme.borderRadius.xs};
    border: 2px solid ${getColorValue(theme, $checkboxColor || 'primary')};
  `}
`;

export const Tick = styled.div<ITick>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme, $isChecked, $checkboxColor }) =>
    $isChecked ? getColorValue(theme, $checkboxColor || 'primary') : '#FFFFFF'};
`;
