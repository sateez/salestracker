import { combineReducers } from 'redux';
import cars from './carsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  cars,
  routing: routerReducer
});

export default rootReducer;
