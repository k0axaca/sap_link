import services from './services';
import selectedService from './selectedService';
import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';

const serviceApp = combineReducers({
  services: services,
  selectedService: selectedService,
  auth: auth,
  user: user
});

export default serviceApp;
