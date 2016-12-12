import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChartCust extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
       let chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(231,233,237)'
        };
        const pieData = {
	labels: [
		'June',
		'July',
        'August',
        'September',
        'October',
        'November'
	],
	datasets: [{
		data: this.props.myLast6MonthRevenue,
		backgroundColor: [
		chartColors.red,
		chartColors.orange,
		chartColors.yellow,
        chartColors.green,
        chartColors.blue,
        chartColors.purple
		],
		hoverBackgroundColor: [
		chartColors.red,
		chartColors.orange,
		chartColors.yellow,
        chartColors.green,
        chartColors.blue,
        chartColors.purple
		]
	}]
};
        return (
            <div className='pie-chart-container'>
        <h2>Revenue of the model for past 6 months</h2>
        <Pie data={pieData} />
      </div>
        )
    }
}
export default PieChartCust;


