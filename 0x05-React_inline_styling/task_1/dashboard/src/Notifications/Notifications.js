import React, { Fragment, Component } from 'react';
// import './Notifications.css';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    const stringy = "Notification ";
    const ID = id + 0;
    const stringer = " has been marked as read";
    const message = stringy + ID + stringer;
    console.log(message)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return( nextProps.listNotifications.length > this.props.listNotifications.length);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
  return (
    <Fragment>
    <div className={css(styles.menuItem)}>
      <p>Your notifications</p>
    </div> 
    { displayDrawer && (
    <div className={css(styles.Notifications)}>
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
        { listNotifications.length === 0 && (
          <NotificationItem value="No new notifications for now"/>
        )}
        { listNotifications.map(({ type, value, html, id }) => (
          <NotificationItem key={id} type={type} value={value} html={html} markAsRead={this.markAsRead}  />
        ))}
      </ul>
    </div>
  )}
  </Fragment>
)}};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #c7254e',
    padding: '2rem',
    float: 'right',
  },

  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem',
  },

  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  }
})

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
