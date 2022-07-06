import React, { Fragment } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


export function Notifications({ displayDrawer = false }) {
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
        <React.Fragment>
          <NotificationItem type='default' value='New course available' />
          <NotificationItem type='urgent' value='New resume available' />
          <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
        </React.Fragment>
      </ul>
    </div>
  )}
  </Fragment>
);
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
