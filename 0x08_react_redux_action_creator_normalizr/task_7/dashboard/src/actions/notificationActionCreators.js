import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

function dispatch(notification) {
  return notification;
}

export const markAsRead = (index) => {
  return dispatch({
    type: MARK_AS_READ,
    index: index
  })
}

export const setNotificationFilter = (filter) => {
  if (filter === 'DEFAULT')
    return dispatch({
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    })
  else
    return dispatch({
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    })
}

