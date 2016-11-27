import CarsApi from '../api/mockCarsApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import toastr from 'toastr';

export function loadCarsSuccess(cars) {
  toastr.info('cars loaded successfully');
  return { type: types.LOAD_CARS_SUCCESS, cars };
}

export function createCarSuccess(car) {
  toastr.success('New Model added');
  return { type: types.CREATE_CAR_SUCCESS, car };
}


export function deleteCarSuccess(car) {
  toastr.error('Removed Model ' + car.title);
  return { type: types.DELETE_CAR_SUCCESS, car };
}

export function loadCars() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CarsApi.getAllCars().then(cars => {
      dispatch(loadCarsSuccess(cars));
    }).catch(error => {
      throw (error);
    });
  };
}

export function saveCar(car) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return CarsApi.saveCar(car).then(car => {
      //car.id ? dispatch(updateCarSuccess(car)) :
      dispatch(createCarSuccess(car));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
export function deleteCar(car) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return CarsApi.deleteCar(car).then(car => {
      //car.id ? dispatch(updateCarSuccess(car)) :
      dispatch(deleteCarSuccess(car));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
