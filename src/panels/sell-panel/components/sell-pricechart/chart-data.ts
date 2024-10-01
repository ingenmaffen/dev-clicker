import { formatTimeWithoutParenthesis } from "../../../../shared/utils/format-time";

interface ChartData {
  options: ApexCharts.ApexOptions;
  series: ApexAxisChartSeries;
}

const getCurrentTimeFormattable = () => {
  const currentTime = new Date();
  return currentTime.getHours() * 60 + currentTime.getMinutes();
};

const getPossibleNextYValue = (prevValue: number): number => {
  const minValue = 5;
  const maxValue = 250;
  let possibleNextValue = prevValue - Math.ceil(Math.random() * 15) + Math.ceil(Math.random() * 15);
  possibleNextValue = possibleNextValue < minValue ? minValue : possibleNextValue;
  possibleNextValue = possibleNextValue > maxValue ? maxValue : possibleNextValue;
  return possibleNextValue;
};

export const getXValues = (): string[] => {
  const formattableTime = getCurrentTimeFormattable();
  const xAxisDateValues: string[] = [];
  for (let i = 0; i < 10; i++) {
    let prevTimeValue = formattableTime - i;
    prevTimeValue = prevTimeValue < 0 ? prevTimeValue + 24 * 60 : prevTimeValue;
    xAxisDateValues.unshift(formatTimeWithoutParenthesis(prevTimeValue));
  }
  return xAxisDateValues;
};

export const shiftXValues = (xValues: string[]): string[] => {
  xValues.shift();
  xValues.push(formatTimeWithoutParenthesis(getCurrentTimeFormattable()));
  return xValues;
};

export const getYValues = (): number[] => {
  const yAxisValues: number[] = [];
  yAxisValues.push(15 + Math.ceil(Math.random() * 10));
  for (let i = 1; i < 10; i++) {
    yAxisValues.push(getPossibleNextYValue(yAxisValues[i - 1]));
  }
  return yAxisValues;
};

export const shiftYValues = (yValues: number[]): number[] => {
  yValues.shift();
  const prevValue = yValues[yValues.length - 1];
  yValues.push(getPossibleNextYValue(prevValue));
  return yValues;
};

export const getChartData = (xValues: string[], yValues: number[]): ChartData => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        categories: xValues,
      },
    },
    series: [
      {
        name: "App base price",
        data: yValues,
      },
    ],
  };
  return chartData;
};
