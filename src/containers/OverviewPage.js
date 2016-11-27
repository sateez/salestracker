import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/carActions';
import Overview from '../Components/Overview';
import FullOverview from '../Components/FullOverview';
import toastr from 'toastr';
class OverviewPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSave = this.onSave.bind(this);
        this.updateCarState = this.updateCarState.bind(this);
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
        const {car} = this.props;
        if (this.props.params.id) {
            return (
                <Overview car={car} />
            )
        } else {
            return (
                <FullOverview cars={this.props.cars} />
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
