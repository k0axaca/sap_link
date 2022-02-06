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

const addPromiseToDispatch = store => {
  const dispatch = store.dispatch;

  return action => {
    if (typeof action.then === 'function') {
      return action.then(dispatch);
    }

    return dispatch(action);
  }
}

const initStore = () => {

  const serviceApp = combineReducers({
    service: servicesReducer,
  });
    
  const store = createStore(serviceApp);
  
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggerToDispatch(store);
  }
  store.dispatch = addPromiseToDispatch(store);

  return store
}

export default initStore;
















