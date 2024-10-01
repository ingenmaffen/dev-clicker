import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import { ReactSetFunction } from "../../../../shared/react-override";
import { getChartData, getXValues, getYValues, shiftXValues, shiftYValues } from "./chart-data";

export interface SellChartProps {
  setPriceState: ReactSetFunction<number>;
}

export const SellPriceChart = (props: SellChartProps) => {
  const { setPriceState } = props;
  const [xValues, setXValues] = useState(getXValues());
  const [yValues, setYValues] = useState(getYValues());
  const [chartState, setChartState] = useState(getChartData(xValues, yValues));

  const setLatestPrice = () => {
    const latestPrice = yValues[yValues.length - 1];
    setPriceState(latestPrice);
  };

  useEffect(() => {
    setLatestPrice();
    const intervalId = setInterval(() => {
      setXValues(shiftXValues(xValues));
      setYValues(shiftYValues(yValues));
      const updatedChartData = getChartData(xValues, yValues);
      setChartState(updatedChartData);
      setLatestPrice();
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Chart options={chartState.options} series={chartState.series} type="line" />;
};
