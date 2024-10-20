import React, { Fragment } from 'react';
import * as S from './styles';
import { IButton } from './types';
import Icon from '../../Feedback/Icon';
import Spinner from '../../Feedback/Spinner';
import TextDisplay from '../../TextElements/TextDisplay';
import { withTheme } from 'styled-components';
import { ColorType } from '../../../theme/constants/color';
import { IconKeys } from '../../Feedback/Icon/types';

const Button: React.FC<IButton> = ({
  text,
  onClick,
  leftIcon,
  rightIcon,
  $buttonColor,
  $variant = 'solid',
  isHidden = false,
  isLoading = false,
  $isDisabled = false,
  $spinnerSize = 14,
  $spinnerColor,
  $iconColor,
  $iconSize = 16,
  $textColor,
  $textAlign = 'center',
  $fontWeight = 'strong',
  $fontSize = 'sm',
  ...rest
}) => {
  if (isHidden) return null;

  const getComponentColor = (color?: ColorType): ColorType => {
    if (color) return color;
    if ($isDisabled) return $variant === 'solid' ? '#F5F5F5' : 'highlight';

    return $variant !== 'solid' ? 'primary' : '#F5F5F5';
  };

  const renderIcon = (icon: IconKeys) => (
    <Icon
      icon={icon}
      $iconColor={getComponentColor($iconColor)}
      $iconSize={$iconSize}
    />
  );

  const handleClick = () => {
    if (!$isDisabled && onClick) onClick();
  };

  return (
    <S.ButtonWrapper
      data-testid="button"
      onClick={handleClick}
      $variant={$variant}
      $buttonColor={$buttonColor}
      $isDisabled={$isDisabled}
      {...rest}
    >
      {isLoading && (
        <Spinner
          $spinnerSize={$spinnerSize}
          $spinnerColor={getComponentColor($spinnerColor)}
        />
      )}

      {!isLoading && (
        <Fragment>
          {leftIcon && renderIcon(leftIcon)}

          <TextDisplay
            text={text}
            $textColor={getComponentColor($textColor)}
            $textAlign={$textAlign}
            $fontWeight={$fontWeight}
            $fontSize={$fontSize}
            {...rest}
          />

          {rightIcon && renderIcon(rightIcon)}
        </Fragment>
      )}
    </S.ButtonWrapper>
  );
};

export default withTheme(Button) as React.FC<IButton>;
