import Chart from "react-apexcharts";

export const SellPriceChart = () => {
    const chartData = {
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: new Array(30).fill(1)
            }
        },
        series: [{
            name: 'App base price',
            data: new Array(30).fill(1)
        }]
    };

    return (
        <Chart options={chartData.options} series={chartData.series} type="line" />
    );
};
