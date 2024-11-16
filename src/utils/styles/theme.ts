import { isKeyOf } from '../common/validations';
import { DefaultTheme } from 'styled-components';
import { ColorType } from '../../theme/constants/color';
import { FontSizeType } from '../../theme/constants/fontSize';
import { FontWeightType } from '../../theme/constants/fontWeight';
import { BorderWidthType } from '../../theme/constants/borderWidth';
import { BorderRadiusType } from '../../theme/constants/borderRadius';
import { BoxShadowType } from '../../theme/constants/boxShadow';

export const getColorValue = (
  theme: DefaultTheme,
  value: ColorType
): string => {
  return isKeyOf(value, theme.color) ? theme.color[value] : value;
};

export const getFontSize = (
  theme: DefaultTheme,
  value: FontSizeType
): string => {
  return isKeyOf(value, theme.fontSize) ? `${theme.fontSize[value]}rem` : value;
};

export const getFontWeight = (
  theme: DefaultTheme,
  value?: FontWeightType
): string => {
  return isKeyOf(value, theme.fontWeight) ? theme.fontWeight[value] : value;
};

export const getBorderWidth = (
  theme: DefaultTheme,
  value?: BorderWidthType
): string => {
  return isKeyOf(value, theme.borderWidth) ? theme.borderWidth[value] : value;
};

export const getBorderRadius = (
  theme: DefaultTheme,
  value?: BorderRadiusType
): string => {
  return isKeyOf(value, theme.borderRadius) ? theme.borderRadius[value] : value;
};

export const getBoxShadow = (
  theme: DefaultTheme,
  value?: BoxShadowType
): string => {
  return isKeyOf(value, theme.boxShadow) ? theme.boxShadow[value] : value;
};

export const getSpacing = (theme: DefaultTheme, value?: string): string => {
  const spacingArray = value?.split(' ');
  const isKeyOfSpacing = (value: string) => isKeyOf(value, theme.spacing);

  if (spacingArray?.every(isKeyOfSpacing)) {
    return spacingArray.map((value) => theme.spacing[value])?.join(' ');
  }

  return spacingArray?.join(' ');
};
