import React from 'react';
import * as S from './styles';
import { ISpinner } from './types';
import { withThemeProvider } from '../../../theme/providers';

const Spinner: React.FC<ISpinner> = (props) => (
  <S.SpinnerWrapper {...props} />
);

export default withThemeProvider(Spinner);
