import React, { PropTypes } from 'react';
import LineChartCust from './LineChartCust';
import PolarAreaCust from './PolarAreaCust';
import MixChartCust from './MixChartCust';
class Analytics extends React.Component{
    constructor(props,context) {
        super(props, context);
    }
    render() {
        console.log('analytics props:--->',this.props);
        return (
            <LineChartCust {... this.props}/>
        )
    }
}

export default Analytics;