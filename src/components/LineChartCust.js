


import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';

class LineChartCust extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.colors = this.colors.bind(this);
    }
    colors() {
        return ['red', 'blue', 'green'];
    }
    render() {
        window.chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(231,233,237)'
        };

        window.randomScalingFactor = function () {
            return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
        }
        console.log('LineCust props:--->', this.props.sales);
        let {last6MonthSales, myLast6MonthSales} = this.props.sales,
            chartData = {
                labels: [
		'June',
		'July',
        'August',
        'September',
        'October',
        'November'
	],
                datasets: [
                    {
                        label: "Firmwide Sales",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: last6MonthSales,
                        spanGaps: false,
                    },
                    {
                        label: "My Sales",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255, 159, 64,0.4)",
                        borderColor: "rgba(255, 159, 64,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255, 159, 64,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255, 159, 64,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: myLast6MonthSales,
                        spanGaps: false,
                    }
                ]
            };
        let chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Firmwide Sales - mySales'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        };


        return (
            <div className="line-chart-container">
                <h2>LineChart</h2>
                <Line data={chartData} options={chartOptions} />
                <hr />
            </div>
        );
    }
}

LineChartCust.propTypes = {
};

export default LineChartCust;
