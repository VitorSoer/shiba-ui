import { IAvatar } from './types';
import styled, { css } from 'styled-components';
import { getBoxShadow, getColorValue } from '../../../utils/styles/theme';

export const AvatarContainer = styled.div<IAvatar>`
  ${({ theme, $avatarSize, $boxShadow, $avatarColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: ${$avatarSize}px;
    height: ${$avatarSize}px;
    padding-top: ${theme.spacing.xs};
    background: ${getColorValue(theme, $avatarColor)};
    box-shadow: ${getBoxShadow(theme, $boxShadow)};
  `}
`;

export const AvatarImage = styled.img<IAvatar>`
  ${({ theme, $avatarSize, $boxShadow }) => css`
    border-radius: 50%;

    width: ${$avatarSize}px;
    height: ${$avatarSize}px;
    padding-top: ${theme.spacing.xs};
    box-shadow: ${getBoxShadow(theme, $boxShadow)};
  `}
`;
