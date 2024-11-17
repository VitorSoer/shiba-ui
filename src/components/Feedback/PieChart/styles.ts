import styled, { css } from 'styled-components';
import { IPieChart } from './types';
import { getColorValue } from '../../../utils/styles/theme';
import { generateHoverBrightnessEffect } from '../../../utils/styles/effects';

interface IStyledComponent extends Pick<IPieChart, '$pieChartSize'> {
  $color?: string;
  $isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ChartContainer = styled.div<{ $size: IPieChart['$pieChartSize'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Slice = styled.path<IStyledComponent>`
  stroke-width: 2px;
  stroke: ${({ theme }) => theme.color.background};
  fill: ${({ theme, $color }) => getColorValue(theme, $color)};
  transition: all 0.2s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: pointer;

      transform: scale(1.05);
      transform-origin: center;
      filter: brightness(1.1);

      ${generateHoverBrightnessEffect()}
    `}
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LegendItem = styled.div<IStyledComponent>`
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.md};

  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.color.accent};
    `}

  transition: all 0.2s ease;
`;

export const LegendColor = styled.div<IStyledComponent>`
  width: ${({ $pieChartSize }) => $pieChartSize / 12}px;
  height: ${({ $pieChartSize }) => $pieChartSize / 12}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $color }) => getColorValue(theme, $color)};
  transition: all 0.2s ease;
`;
