import { createStore, combineReducers } from 'redux';
import servicesReducer from '../reducers';

const addLoggerToDispatch = (store) => {
  const dispatch = store.dispatch;

  // dispatch function with logging
  return action => {  // action is the action object
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = dispatch(action);
    console.log('%c next state', 'color: green', store.getState());
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
















