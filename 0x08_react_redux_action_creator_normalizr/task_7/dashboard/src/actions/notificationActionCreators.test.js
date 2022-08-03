import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('should create', () => {
    const doThings = markAsRead(1);
    expect(doThings).toEqual({ type: MARK_AS_READ, index: 1});
  })

  it('should', () => {
    const doThings = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(doThings).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  })

})
