import React from 'react';
import * as S from './styles';
import { ITextDisplay } from './types';
import { withThemeProvider } from '../../../theme/providers';

const TextDisplay: React.FC<ITextDisplay> = ({ text, isHidden, ...rest }) => {
  if (!text || isHidden) return null;

  return <S.TextWrapper {...rest}>{text || ''}</S.TextWrapper>;
};

export default withThemeProvider(TextDisplay);
