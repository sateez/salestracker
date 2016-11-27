import React, { PropTypes } from 'react';
import '../styles/car-details.scss';
import Analytics from './Analytics';
import { Link } from 'react-router';
class CarDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log('carDetailsProps: --- >', props);
        this.state = {};
        this.handleAnalytics = this.handleAnalytics.bind(this);
    }
    handleAnalytics() {
        console.log(this.state);
        this.setState({ showAnalytics: !this.state.showAnalytics });
    }
    render() {
        return (
            <div>
                <div className='grid-row row' >
                    <div className='grid-row-column column-image col-sm-2'>&nbsp;
                <img className="img-responsive img-thumbnail" src={this.props.url} /></div>
                    <div className='grid-row-column column-title col-sm-2'>{this.props.title} </div>
                    <div className='grid-row-column column-code col-sm-1'>{this.props.cid} </div>
                    <div className='grid-row-column  col-sm-2'>
                        <div className='grid-row-column column-est-daily col-sm-6'>{this.props.estSalesDaily}</div>
                        <div className='grid-row-column column-est-monthly col-sm-6'>{this.props.estSalesMonthly}</div>
                    </div>
                    <div className='grid-row-column col-sm-2'>
                        <div className='grid-row-column column-est-rev-unit col-sm-6'>{this.props.estRevenuePerUnit}</div>
                        <div className='grid-row-column column-est-rev-monthly col-sm-6'>{this.props.estRevenuePerMonth}</div>
                    </div>
                    <div className='grid-row-column column-goto col-sm-1' title={this.props.title + ' overview'}>
                        <Link to={'overview/' + this.props.cid}> <button className='btn btn-primary' ><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button></Link>
                    </div>
                    <div className='grid-row-column column-show-hide col-sm-1'><button className='btn btn-primary' onClick={this.handleAnalytics}><i className="fa fa-area-chart" aria-hidden="true"></i> &nbsp;<i className={this.state.showAnalytics?"fa fa-toggle-up":"fa fa-toggle-down"} aria-hidden="true"></i></button></div>
                    <div className='grid-row-column column-remove col-sm-1'><button className='btn btn-danger' onClick={() => { this.props.removeCar(this.props) } }><i className="fa fa-trash" aria-hidden="true"></i></button></div>



                </div>
                <div className={this.state.showAnalytics ? 'analytics' : 'zero-height analytics'}>
                    <Analytics sales={this.props.sales} />
                </div>
            </div>
        )
    }
}
export default CarDetails;
