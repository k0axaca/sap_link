import { FETCH_SERVICES_SUCCESS } from '../types';

const servicesReducer = (state = {items: []}, action) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return {...state, items: action.services};
    default:
      return state;
  }
}

export default servicesReducer;