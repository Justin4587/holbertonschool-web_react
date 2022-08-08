import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, 
    LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionsTypes';


function dispatch(action) {
  return action;
}

export const login = (email, password) => {
  return dispatch({
    type: LOGIN,
    user: email, password
  })
}

export const logout = (email, password) => {
  return dispatch({ type: LOGOUT })
}

export const displayNotificationDrawer = () => {
  return dispatch({ type: DISPLAY_NOTIFICATION_DRAWER })
}

export const hideNotificationDrawer = () => {
  return dispatch({ type: HIDE_NOTIFICATION_DRAWER })
}

export const loginSuccess = () => {
  return dispatch({ type: LOGIN_SUCCESS })
}

export const loginFailure = () => {
  return dispatch({ type: LOGIN_FAILURE })
}

export const loginRequest = (email, password) => {
  return function (dispatch) {
    dispatch(login(email, password))
    fetch('/login_success.json')
      .then(() => dispatch(loginSuccess))
      .catch(() => dispatch(loginFailure))
  }
}
