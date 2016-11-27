import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/carActions';
import SalesTracker from '../components/SalesTracker';
import CarDetails from '../components/CarDetails';
import MainPanel from '../components/MainPanel';
import GridHeader from '../components/GridHeader';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import toastr from 'toastr';
class SalesTrackerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filterText: '',
      errors: {},
      loaded: false
    }
    this.redirectToAddCarPage = this.redirectToAddCarPage.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.filterTextChanged = this.filterTextChanged.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  redirectToAddCarPage() {
    browserHistory.push('/car-new');
  }
  removeCar(car) {
    this.props.actions.deleteCar(car);
  }
  filterTextChanged(event) {
    console.log('', event.target.name, event.target.value);
    this.state.filterText  =event.target.value;
    if (!this.state.filterText) {
      this.setState({ cars: this.props.cars,filterText:'' });
    }
    var size = this.props.cars.length;
    var filteredList = [];
    for (var index = 0; index < size; index++) {
      var v = this.props.cars[index]['title'];
      if (v.toString().toLowerCase().indexOf(this.state.filterText) !== -1) {
        filteredList.push(this.props.cars[index]);
      }
    }
    toastr.clear();
     toastr.info('Data Filtered');
    this.setState({ cars: filteredList });
  }
  clearFilter() {
      toastr.warning('Filter cleared');
    this.setState({ cars: this.props.cars,filterText:'' });
  }
  render() {
      this.state.cars = (this.state.loaded) ? this.state.cars : this.props.cars;
      this.state.cars = _.intersection(this.state.cars, this.props.cars);  
    if (this.props.cars.length > 0) {
       this.state.loaded = true;
    }
      
    return (
      <div>
        <MainPanel
          redirect={this.redirectToAddCarPage}
          filterText={this.state.filterText}
          filterTextChanged={this.filterTextChanged}
          clearFilter={this.clearFilter}
          errors={this.state.errors} />
        <div id='grid'>
          <GridHeader />
          <hr />
          <div id='grid-content'>
            {(this.state.cars.length>0)?this.state.cars.map(car =>
              <CarDetails removeCar={this.removeCar} key={car.cid} {...car} />
            ):<h2>No data avalilable</h2>}
          </div>
        </div>
      </div>
    )
  }

};

SalesTracker.propTypes = {
  cars: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cars: state.cars
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
)(SalesTrackerPage);
