import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { formatTimeWithoutParenthesis } from "../Common/Utils";

const getCurrentTimeFormattable = () => {
    const currentTime = new Date();
    return currentTime.getHours() * 60 + currentTime.getMinutes();
};

const getXValues = () => {
    const formattableTime = getCurrentTimeFormattable();
    const xAxisDateValues = [];
    for (let i = 0; i < 10; i++) {
        let prevTimeValue = formattableTime - i;
        prevTimeValue = prevTimeValue < 0 ? prevTimeValue + 24 * 60 : prevTimeValue;
        xAxisDateValues.unshift(formatTimeWithoutParenthesis(prevTimeValue));
    }
    return xAxisDateValues;
};

const shiftXValues = (xValues) => {
    xValues.shift();
    xValues.push(formatTimeWithoutParenthesis(getCurrentTimeFormattable()));
    return xValues;
};

const getYValues = () => {
    const yAxisValues = [];
    yAxisValues.push(15 + Math.ceil(Math.random() * 10));
    for (let i = 1; i < 10; i++) {
        yAxisValues.push(getPossibleNextYValue(yAxisValues[i-1]));
    }
    return yAxisValues;
};

const getPossibleNextYValue = (prevValue) => {
    const minValue = 5;
    const maxValue = 250;
    let possibleNextValue = prevValue -Math.ceil(Math.random() * 15) + Math.ceil(Math.random() * 15);
    possibleNextValue = possibleNextValue < minValue ? minValue : possibleNextValue;
    possibleNextValue = possibleNextValue > maxValue ? maxValue : possibleNextValue;
    return possibleNextValue;
};

const shiftYValues = (yValues) => {
    yValues.shift();
    const prevValue = yValues[yValues.length - 1];
    yValues.push(getPossibleNextYValue(prevValue));
    return yValues;
};
const getChartData = (xValues, yValues) => { 
    const chartData = {
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            tooltip: {
                enabled: false
            },
            xaxis: {
                categories: xValues
            }
        },
        series: [{
            name: 'App base price',
            data: yValues
        }]
    };
    return chartData;
}


export const SellPriceChart = ({setPriceState}) => {
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
    

    return (
        <Chart options={chartState.options} series={chartState.series} type="line" />
    );
};
