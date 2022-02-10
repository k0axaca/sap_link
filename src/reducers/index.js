import services from './services';
import selectedService from './selectedService';
import { combineReducers } from 'redux';
import auth from './auth';

const serviceApp = combineReducers({
  services: services,
  selectedService: selectedService,
  auth: auth
});

export default serviceApp;
