import styled, { css } from 'styled-components';
import { IRadio, ITick } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const Box = styled.div<IRadio>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, $radioSize, $radioColor, $isDisabled }) => {
    const borderColor = $isDisabled
      ? theme.color.highlight
      : getColorValue(theme, $radioColor);

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};

      width: ${$radioSize}px;
      height: ${$radioSize}px;
      padding: ${theme.spacing.xs};
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
  border-radius: 50%;

  background: ${({ theme, $isChecked, $radioColor, $isDisabled }) => {
    const backgroundColor = $isDisabled
      ? theme.color.highlight
      : getColorValue(theme, $radioColor);

    return $isChecked ? backgroundColor : '#FFFFFF';
  }};
`;
