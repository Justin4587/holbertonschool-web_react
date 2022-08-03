import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionsTypes';
import fetch from 'node-fetch';

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


