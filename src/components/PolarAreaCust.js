


import React, { PropTypes } from 'react';
import {Polar} from 'react-chartjs-2';

class PolarAreaCust extends React.Component {
  constructor(props, context) {
    super(props, context);
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
    const chartData = {
  datasets: [{
    data: this.props.quadData,
    backgroundColor: [
      chartColors.red,
      chartColors.orange,
      chartColors.yellow,
      chartColors.blue
    ],
    label: 'quadrant sales' // for legend
  }],
  labels: [
    'Quarter 1',
    'Quarter 2',
    'Quarter 3',
    'Quarter 4'
  ]
};
    
    
      
    return (
      <div className="polar-chart-container">
         <h2>Quadrant Representation of Complete Revenue</h2>
        <Polar data={chartData} />
        <hr /> 
      </div>
    );
  }
}

PolarAreaCust.propTypes = {
};

export default PolarAreaCust;
