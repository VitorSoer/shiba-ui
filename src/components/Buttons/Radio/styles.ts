import styled, { css } from 'styled-components';
import { IRadio, ITick } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const Box = styled.div<IRadio>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, $radioSize, $radioColor }) => css`
    width: ${$radioSize}px;
    height: ${$radioSize}px;
    padding: ${theme.spacing.xs};
    border: 2px solid ${getColorValue(theme, $radioColor || 'primary')};
  `}
`;

export const Tick = styled.div<ITick>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  background: ${({ theme, $isChecked, $radioColor }) =>
    $isChecked ? getColorValue(theme, $radioColor || 'primary') : '#FFFFFF'};
`;
