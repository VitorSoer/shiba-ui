import { ISpinner } from './types';
import styled, { css } from 'styled-components';
import { getColorValue } from '../../../utils/styles/theme';
import { generateSpinAnimation } from '../../../utils/styles/animations';

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

    ${generateSpinAnimation()}
  `}
`;
