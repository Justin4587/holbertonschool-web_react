import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
import { Map, setIn, set, merge } from 'immutable'

const iState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT
});

export default function notificationReducer(state = iState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const noteReturn = action.data.map((notification) => ({
          ...notification,
          isRead: false
        }));
      
      const normNote = notificationsNormalizer(noteReturn);
      return state.merge({notifications: normNote});
    }
    
    case MARK_AS_READ: {
      return setIn(state, ['entities', 'notifications', action.index], true);
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    default: return state;
  }
}
