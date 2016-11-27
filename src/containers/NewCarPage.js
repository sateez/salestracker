import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/carActions';
import NewCarForm from '../Components/NewCarForm';
import toastr from 'toastr';
class NewCarPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSave = this.onSave.bind(this);
        this.updateCarState = this.updateCarState.bind(this);
        this.state = {
            car: Object.assign({}, this.props.car),
            errors: {}
        }
    }
    updateCarState(event) {
    const field = event.target.name;
    let car = this.state.car;
    car[field] = event.target.value;
    return this.setState({car: car});
  }
    onSave(event) {
        event.preventDefault();
        this.setState({saving: true});

    this.props.actions.saveCar(this.state.car)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
    }
    redirect() {
    this.setState({saving: false});
    toastr.success('Car saved');
    this.context.router.push('/sales-tracker');
  }
    render() {
        const {car} = this.props;
        console.log('car:--->', car);
        return (
            <NewCarForm
                car={this.state.car}
                errors={this.state.errors}
                onChange={this.updateCarState}
                onSave={this.onSave} />
        )
    }

};

NewCarPage.propTypes = {
    car: PropTypes.object.isRequired
};
NewCarPage.contextTypes = {
  router: PropTypes.object
};
function mapStateToProps(state, ownProps) {
    let car = {
    title: '',
    cid: '',
    desc: '',
    estSalesDaily: '',
    estSalesMonthly: '',
    estRevenuePerUnit: '',
    estRevenuePerMonth: '',
    url:''
  }; 
    return {
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
)(NewCarPage);
