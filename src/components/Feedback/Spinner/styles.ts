import styled, { css, keyframes } from 'styled-components';
import { ISpinner } from './types';
import { getColorValue } from '../../../utils/styles/theme';

const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div<ISpinner>`
  ${({ theme, $spinnerColor, $spinnerSize = 20 }) => css`
    width: ${$spinnerSize}px;
    height: ${$spinnerSize}px;
    border-width: ${$spinnerSize / 5}px;

    border-radius: 50%;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${getColorValue(theme, $spinnerColor || 'primary')};
    border-right-color: ${getColorValue(theme, $spinnerColor || 'primary')};

    animation: ${spinAnimation} 1s linear infinite;
  `}
`;
