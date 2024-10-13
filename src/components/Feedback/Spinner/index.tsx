import React from 'react';
import * as S from './styles';
import { ISpinner } from './types';
import { withTheme,  } from 'styled-components';

const Spinner: React.FC<ISpinner> = (props) => (
  <S.SpinnerWrapper {...props} />
);


export default withTheme(Spinner) as React.FC<ISpinner>;
