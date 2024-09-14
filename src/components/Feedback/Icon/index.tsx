import React from 'react';
import { nanoid } from 'nanoid';
import { useTheme } from 'styled-components';
import * as iconList from '../../../assets/icons/index';
import { getColorValue } from '../../../functions/theme';
import { DefaultIconValues, IIconProps } from './types';
import { withThemeProvider } from '../../../theme/providers';

const Icon: React.FC<IIconProps> = ({
  icon = DefaultIconValues.Icon,
  $iconSize = DefaultIconValues.Size,
  $iconColor = DefaultIconValues.Color,
}) => {
  const theme = useTheme();
  const selectedColor = getColorValue(theme, $iconColor);
  const { path = [], view = DefaultIconValues.ViewBox } = iconList[icon] || {};

  return (
    <svg width={$iconSize} height={$iconSize} viewBox={view}>
      {path.map((data: string) => (
        <path key={nanoid()} d={data} fill={selectedColor} />
      ))}
    </svg>
  );
};

export default withThemeProvider(Icon);
