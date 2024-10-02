import { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";

import { ReactSetFunction } from "../../../../shared/react-override";
import { getChartData, getXValues, getYValues, shiftXValues, shiftYValues } from "./chart-data";

export interface SellChartProps {
  setPriceState: ReactSetFunction<number>;
}

export const SellPriceChart = (props: SellChartProps) => {
  const { setPriceState } = props;
  const xValues = useRef(getXValues());
  const yValues = useRef(getYValues());
  const [chartState, setChartState] = useState(getChartData(xValues.current, yValues.current));

  const setLatestPrice = () => {
    const latestPrice = yValues.current[yValues.current.length - 1];
    setPriceState(latestPrice);
  };

  useEffect(() => {
    setLatestPrice();
    const intervalId = setInterval(() => {
      xValues.current = shiftXValues(xValues.current);
      yValues.current = shiftYValues(yValues.current);
      const updatedChartData = getChartData(xValues.current, yValues.current);
      setChartState(updatedChartData);
      setLatestPrice();
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Chart options={chartState.options} series={chartState.series} type="line" />;
};
