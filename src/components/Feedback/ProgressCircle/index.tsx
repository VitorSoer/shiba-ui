import React, { useCallback } from 'react';
import * as S from './styles';
import { IProgressCircle } from './types';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';

const ProgressCircle: React.FC<IProgressCircle> = ({
  progressValue = 0,
  $progressCircleBaseColor = 'highlight',
  $progressCircleRangeColor = 'primary',
  $progressCircleSize = 60,
}) => {
  const clampValue = useCallback(
    (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
    []
  );

  const circleProgressValue = clampValue(progressValue, 0, 100);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circleProgressValue / 100) * circumference;

  return (
    <S.CircleContainer
      data-testid="progress-circle"
      $progressCircleSize={$progressCircleSize}
    >
      <S.SVG viewBox="0 0 80 80" $progressCircleSize={$progressCircleSize}>
        <S.CircleSVG
          cx="40"
          cy="40"
          r={radius}
          $progressCircleBaseColor={$progressCircleBaseColor}
          strokeWidth="8"
          data-testid="progress-circle-base"
        />
        <S.CircleSVG
          cx="40"
          cy="40"
          r={radius}
          $progressCircleRangeColor={$progressCircleRangeColor}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          data-testid="progress-circle-range"
        />
      </S.SVG>
      <S.ProgressValueText>
        <TextDisplay
          text={`${circleProgressValue}%`}
          $fontSize={`${$progressCircleSize / 65}rem`}
          $fontWeight="strong"
        />
      </S.ProgressValueText>
    </S.CircleContainer>
  );
};

export default withTheme(ProgressCircle) as React.FC<IProgressCircle>;
