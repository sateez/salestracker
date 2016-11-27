


import React, { PropTypes } from 'react';
import { Bar } from 'react-chartjs-2';

class MixChartCust extends React.Component {
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
        const chartData = {
            labels: [
		'June',
		'July',
        'August',
        'September',
        'October',
        'November'
	],
            datasets: [{
                label: 'Sales',
                type: 'line',
                data: this.props.last6MonthSales,
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#EC932F',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-2'
            }, {
                type: 'bar',
                label: 'Revenue',
                data: this.props.last6MonthRevenue,
                fill: false,
                backgroundColor: '#71B37C',
                borderColor: '#71B37C',
                hoverBackgroundColor: '#71B37C',
                hoverBorderColor: '#71B37C',
                yAxisID: 'y-axis-1'
            }]
        };

        const chartOptions = {
            responsive: true,
            tooltips: {
                mode: 'label'
            },
            elements: {
                line: {
                    fill: false
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        }
                    }
                ],
                yAxes: [
                    {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        }
                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-2',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        }
                    }
                ]
            }
        };


        return (
            <div className="mix-chart-container">
                <h2>Mixed representation of complete  sales and revenue</h2>
                <Bar
                    data={chartData}
                    options={chartOptions}
                    />
                <hr />
            </div>
        );
    }
}

MixChartCust.propTypes = {
};

export default MixChartCust;
