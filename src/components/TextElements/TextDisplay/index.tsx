import React from 'react';
import * as S from './styles';
import { ITextDisplay } from './types';
import { withTheme } from 'styled-components';

const TextDisplay: React.FC<ITextDisplay> = ({ text, isHidden, ...rest }) => {
  if (!text || isHidden) return null;

  return <S.TextWrapper data-testid='text-display' {...rest}>{text || ''}</S.TextWrapper>;
};

export default withTheme(TextDisplay) as React.FC<ITextDisplay>;
