


import React, { PropTypes } from 'react';
import {Doughnut,Pie} from 'react-chartjs';

class SalesTracker extends React.Component {
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

window.randomScalingFactor = function() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}
    let chartData = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};
    let chartOptions = {
                responsive: true,
                cutoutPercentage: 50,
                rotation: -0.5 * Math.PI,
                circumference: 2 * Math.PI,
                animation: {
                  animateRotate: true,
                  animateScale: true,
                  legend: {
                    labels: {
                      generateLabels: (chart) => { return chart;}
                    },
                    onClick: (e, item) => { return item;}
                  }
                }
               
            };
    
      
    return (
      <div>
         <h2>Doughnut Chart</h2>
        <Doughnut data={chartData} options={chartOptions}/>
        <hr /> 
      </div>
    );
  }
}

SalesTracker.propTypes = {
};

export default SalesTracker;
