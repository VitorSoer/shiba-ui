import React from 'react';
import * as S from './styles';
import { IAvatar } from './types';
import TextDisplay from '../../TextElements/TextDisplay';
import { withTheme } from 'styled-components';
import { getNameInitials } from '../../../utils/common/strings';

const Avatar: React.FC<IAvatar> = ({
  userName,
  image,
  $avatarSize = 50,
  $boxShadow = 'rm',
  $avatarColor = 'primary',
}) => {
  const formattedUserName = getNameInitials(userName);

  if (!image) {
    return (
      <S.AvatarContainer
        data-testid="avatar-text"
        $avatarSize={$avatarSize}
        $avatarColor={$avatarColor}
        $boxShadow={$boxShadow}
      >
        <TextDisplay
          text={formattedUserName}
          $textColor="textDefault"
          $fontSize={`${$avatarSize / 30}rem`}
          $fontWeight="strong"
        />
      </S.AvatarContainer>
    );
  }

  return (
    <S.AvatarImage
      data-testid="avatar-image"
      src={image}
      alt="Avatar"
      $avatarSize={$avatarSize}
      $avatarColor={$avatarColor}
      $boxShadow={$boxShadow}
    />
  );
};

export default withTheme(Avatar) as React.FC<IAvatar>;
