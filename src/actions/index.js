import { FETCH_SERVICES_SUCCESS, FETCH_SERVICE_SUCCESS, REQUEST_SERVICE, SET_AUTH_USER, FETCH_USER_SERVICES_SUCCESS, FETCH_USER_MESSAGES_SUCCESS } from "../types";
import * as api from "../api";

// SERVICES START //
export const fetchServices = () => dispatch =>
   api
    .fetchServices()
    .then(services => dispatch(
      {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    )
  )

export const fetchUserServices = userId => dispatch => 
  api.fetchUserServices(userId).then(services =>
    dispatch({type: FETCH_USER_SERVICES_SUCCESS, services}))


export const fetchServiceById = serviceId => dispatch => {
  dispatch({type: FETCH_SERVICE_SUCCESS, service: {}})
  dispatch({type: REQUEST_SERVICE})
  return api
    .fetchServiceById(serviceId)
    .then(async service => {
      service.user = await api.getUserProfile(service.user)
      dispatch({type: FETCH_SERVICE_SUCCESS, service})
    }
  )
}

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10)
  newService.user = userId

  return api.createService(newService)
}

// SERVICES END //

// AUTH STARTS//

export const register = (registerFormData) => api.register({...registerFormData})
export const login = loginData => api.login({...loginData})
export const onAuthStateChanged = onAuthCallback => api.onAuthStateChanged(onAuthCallback)

export const logout = () => dispatch => 
  api.logout().then(_ => dispatch({user: null, type: SET_AUTH_USER})) 

export const storeAuthUser = authUser => dispatch => {
  if (authUser) {
    return api
      .getUserProfile(authUser.uid)
      .then(userWithProfile => dispatch({user: userWithProfile, type: SET_AUTH_USER}))
  } else {
    return dispatch({user: null, type: SET_AUTH_USER})
  }
}

// AUTH ENDS 

// MESSAGES START //

export const subscribeToMessages = userId => dispatch =>
  api.subscribeToMessages(userId, 
    messages => dispatch({type: FETCH_USER_MESSAGES_SUCCESS, messages}))

export const markMessageAsRead = message => api.markMessageAsRead(message)
