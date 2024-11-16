import styled from 'styled-components';
import { IProgressCircle } from './types';
import { getColorValue } from '../../../utils/styles/theme';

export const CircleContainer = styled.div<IProgressCircle>`
  display: grid;
  place-items: center;
  position: relative;
  width: ${({ $progressCircleSize }) => $progressCircleSize}px;
  height: ${({ $progressCircleSize }) => $progressCircleSize}px;
`;

export const SVG = styled.svg<IProgressCircle>`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

export const CircleSVG = styled.circle<IProgressCircle>`
  fill: none;
  stroke: ${({ theme, $progressCircleBaseColor, $progressCircleRangeColor }) =>
    $progressCircleBaseColor
      ? getColorValue(theme, $progressCircleBaseColor)
      : getColorValue(theme, $progressCircleRangeColor)};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;


export const ProgressValueText = styled.div`
  position: absolute;
`;
