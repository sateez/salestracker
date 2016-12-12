import React from 'react';
import {Bar} from 'react-chartjs-2';

class BarChartCust extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const barData = {
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
      label: 'Firmwide Model Sales',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: this.props.firmwideSales
    },
    {
      label: 'My Model Sale',
      backgroundColor: 'rgba(54, 162, 235,0.2)',
      borderColor: 'rgba(54, 162, 235,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
      hoverBorderColor: 'rgba(54, 162, 235,1)',
      data: this.props.modelSales
    }
  ]
};
        return (
             <div className='bar-chart-container'>
        <h2>Firmwide and individual sales of Model</h2>
        <Bar
          data={barData}
        />
      </div>
        )
    }
}
export default BarChartCust;


