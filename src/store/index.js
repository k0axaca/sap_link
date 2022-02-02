import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers';

const initStore = () => {

  const serviceApp = combineReducers({
    service: servicesReducer,
  });
    
    const store = createStore(serviceApp);
    return store
  }

export default initStore;
















