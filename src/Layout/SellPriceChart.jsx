import Chart from "react-apexcharts";
import { formatTimeWithoutParenthesis } from "../Common/Utils";

export const SellPriceChart = () => {
    const currentTime = new Date();
    const formattableTime = currentTime.getHours() * 60 + currentTime.getMinutes();
    const xAxisDateValues = [];
    const yAxisValues = [];
    for (let i = 0; i < 10; i++) {
        xAxisDateValues.unshift(formatTimeWithoutParenthesis(formattableTime - i));
        yAxisValues.push(Math.ceil(Math.random() * 10));
    }

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
                categories: xAxisDateValues
            }
        },
        series: [{
            name: 'App base price',
            data: yAxisValues
        }]
    };

    return (
        <Chart options={chartData.options} series={chartData.series} type="line" />
    );
};
