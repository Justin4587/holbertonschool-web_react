import {Map} from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return Map(state.getIn(['notifications', 'entities', 'notifications']))
}

export function getUnreadNotifications(state) {
  const unNotifications = getNotifications(state);
  return unNotifications.filter((notification) => notification.isRead === false);
}
