import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/carActions';
import Overview from '../Components/Overview';
import FullOverview from '../Components/FullOverview';
import toastr from 'toastr';
import _ from 'lodash';
class OverviewPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSave = this.onSave.bind(this);
        this.updateCarState = this.updateCarState.bind(this);
        this.totalCarsInfo = this.totalCarsInfo.bind(this);
        this.state = {
            car: Object.assign({}, this.props.car),
            errors: {}
        }
    }

    // ComponentWillReceiveProps(newProps) {
    //     console.log('ComponentWillReceiveProps:--->',newProps);
    //     if (this.props.car.id != newProps.car.id) {
    //         console.log('update new props:--->');
    //     }
    // }
    totalCarsInfo() {
        if (!this.props || !this.props.cars || !this.props.cars.length > 0) {
            return {
                totalCarsSold: 0,
                totalRevenue: 0,
                highestModel: '-',
                leastModel: '-',
                highestSalesMonth: '-'
            }
        }    
       let months = ['June','July','August','September','October','November'],
         totalCarsSold = 0,
            totalRevenue = 0,
            highestModel = 0,
            leastModel = 0,
            highestSalesMonth = ""
        _.forOwn(this.props.cars, function (car,index) {
            console.log('car in full overview :--->', car, index);
            let carRevenue = 0,
                carSold=0;
            _.forOwn(car.sales.last6MonthSales, function (sales) {
                totalCarsSold = totalCarsSold + sales;
                carSold = carSold + sales;
            })
            _.forOwn(car.sales.last6MonthRevenue, function (revenue) {
                totalRevenue = totalRevenue + revenue;
                carRevenue = carRevenue + revenue;
            })
            if (carSold > highestModel) highestModel = index;
            if (leastModel === 0)
                leastModel = index;
            else if(carSold < leastModel)
                leastModel = index;
            if (carRevenue > highestSalesMonth) highestSalesMonth = index;
        })

        return {
            totalCarsSold :totalCarsSold,
            totalRevenue :totalRevenue,
            highestModel :this.props.cars[highestModel].title,
            leastModel :this.props.cars[leastModel].title,
            highestSalesMonth :months[highestSalesMonth]
        }
    }
    updateCarState(event) {
        const field = event.target.name;
        let car = this.state.car;
        car[field] = event.target.value;
        return this.setState({ car: car });
    }
    onSave(event) {
        event.preventDefault();
        this.setState({ saving: true });

        this.props.actions.saveCar(this.state.car)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }
    redirect() {
        this.setState({ saving: false });
        toastr.success('Car saved');
        this.context.router.push('/sales-tracker');
    }
    render() {
        console.log('overview props:--->', this.props);
        const {car,cars} = this.props;
        if (this.props.params.id) {
            return (
                <Overview car={car} cars={cars} totalCarsInfo={this.totalCarsInfo()}/>
            )
        } else {
            return (
                <FullOverview cars={cars} totalCarsInfo={this.totalCarsInfo()}/>
            )
        }

    }

};

OverviewPage.propTypes = {
    car: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
};
OverviewPage.contextTypes = {
    router: PropTypes.object
};

function getCarById(cid, cars) {
    const car = cars.filter(car => car.cid == cid);
    if (car) return car[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    console.log('Overview ID:--->', state, ownProps);
    let cid = ownProps.params.id;
    let car = {};
    if (cid && state.cars.length > 0) {
        car = getCarById(cid, state.cars);
    }
    return {
        cars: state.cars,
        car: car
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OverviewPage);
