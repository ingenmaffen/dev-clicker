import { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";

import { ReactSetFunction } from "../../../../shared/react-override";
import { getChartData, getXValues, getYValues, shiftYValues } from "./chart-data";

export interface SellChartProps {
  setPriceMultiplier: ReactSetFunction<number>;
}

export const SellPriceChart = (props: SellChartProps) => {
  const { setPriceMultiplier } = props;
  const xValues = useRef(getXValues());
  const yValues = useRef(getYValues());
  const [chartState, setChartState] = useState(getChartData(xValues.current, yValues.current));

  const setLatestPrice = () => {
    const latestPrice = yValues.current[yValues.current.length - 1];
    setPriceMultiplier(latestPrice);
  };

  useEffect(() => {
    setLatestPrice();
    const intervalId = setInterval(() => {
      xValues.current = getXValues();
      yValues.current = shiftYValues(yValues.current);
      const updatedChartData = getChartData(xValues.current, yValues.current);
      setChartState(updatedChartData);
      setLatestPrice();
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  // TODO: add tooltip too see exact price
  return <Chart options={chartState.options} series={chartState.series} type="line" />;
};
