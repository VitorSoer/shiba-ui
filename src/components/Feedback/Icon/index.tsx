import React from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import * as iconList from '../../../assets/icons/index';
import { getColorValue } from '../../../utils/styles/theme';
import { DefaultIconValues, IIconProps } from './types';
import { withTheme } from 'styled-components';
import { ColorType } from '../../../theme/constants/color';

const Icon: React.FC<IIconProps> = ({
  icon = DefaultIconValues.Icon,
  $iconSize = DefaultIconValues.Size,
  $variant = 'icon',
  $iconColor,
  onClick,
  ...rest
}) => {
  const theme = useTheme();
  const { path = [], view = DefaultIconValues.ViewBox } = iconList[icon] || {};

  const getComponentColor = (): ColorType => {
    return (
      $iconColor ||
      ($variant === 'circle' || $variant === 'square' ? 'background' : 'primary')
    );
  };

  const selectedColor = getColorValue(theme, getComponentColor());

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <S.IconWrapper onClick={handleClick} $variant={$variant} {...rest}>
      <svg width={$iconSize} height={$iconSize} viewBox={view}>
        {path.map((data: string, index: number) => (
          <path key={index} d={data} fill={selectedColor} />
        ))}
      </svg>
    </S.IconWrapper>
  );
};

export default withTheme(Icon) as React.FC<IIconProps>;
