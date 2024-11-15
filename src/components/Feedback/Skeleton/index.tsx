import React from 'react';
import * as S from './styles';
import { withTheme } from 'styled-components';
import { ISkeleton } from './types';

const Skeleton: React.FC<ISkeleton> = (props) => {
  return <S.SkeletonWrapper data-testid="skeleton" {...props} />;
};

export default withTheme(Skeleton) as React.FC<ISkeleton>;
