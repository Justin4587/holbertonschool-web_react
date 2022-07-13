import React, { Fragment } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


export function Notifications({ displayDrawer, listNotifications }) {
  return (
    <Fragment>
    <div className="menuItem">
      <p>Your notifications</p>
    </div> 
    {displayDrawer && (
    <div className="Notifications">
      <button style={{
        position: "relative",
        float: "right",
        border: "none",
      }}
      aria-label='Close'
      onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" width="10" height="10"></img>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length === 0 && (
          <NotificationItem value="No new notifications for now"/>
        )}
        {listNotifications.map((list) => (
          <NotificationItem key={list.id} type={list.type} value={list.value} html={list.html} />
        ))}
      </ul>
    </div>
  )}
  </Fragment>
);
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
