import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers';

const addLoggerToDispatch = (store) => {
  const dispatch = store.dispatch;

  return action => {  // action is the action object
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    const returnValue = dispatch(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const initStore = () => {

  const serviceApp = combineReducers({
    service: servicesReducer,
  });
    
    const store = createStore(serviceApp);

    store.dispatch = addLoggerToDispatch(store);

    return store
  }

export default initStore;
















