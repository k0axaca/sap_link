import { createStore, combineReducers } from 'redux';

const initStore = () => {

  const serviceApp = combineReducers({
    service: (state =  {items: []}, action) => {
      debugger 
      if (action.type === 'FETCH_SERVICES') {
        return {...state, items: action.services}
      } 
      return state
    }
  });
    
    const store = createStore(serviceApp);
    return store
  }

export default initStore;
















