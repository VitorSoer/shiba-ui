export interface IPieData {
  percent: number;
  color: string;
  label: string;
}

export interface IPieChart {
  data: IPieData[];
  $pieChartSize?: number;
  isLegendHidden?: boolean;
}
