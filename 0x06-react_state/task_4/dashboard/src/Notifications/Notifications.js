import React, { Fragment, Component, PureComponent } from 'react';
// import './Notifications.css';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    // this.markAsRead = this.markAsRead.bind(this);
  }
  // markAsRead(id) {
  //   const stringy = "Notification ";
  //   const ID = id + 0;
  //   const stringer = " has been marked as read";
  //   const message = stringy + ID + stringer;
  //   console.log(message)
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (nextProps.listNotifications.length > this.props.listNotifications.length ||
  //     nextProps.displayDrawer !== this.props.displayDrawer);
  // }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer,
      markNotificationAsRead,  
    } = this.props;
    return (
      <Fragment>
        <div className={
          displayDrawer ?
            css(styles.menuItem, styles.hover, styles.hide)
            : css(styles.menuItem, styles.hover)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button style={{
              position: "relative",
              float: "right",
              border: "none",
            }}
              aria-label='Close'
              onClick={handleHideDrawer}>
              <img src={closeIcon} alt="close-icon" width="10" height="10"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notifications for now" />
              )}
              {listNotifications.map(({ type, value, html, id }) => (
                <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={markNotificationAsRead} />
              ))}
            </ul>
          </div>
        )}
      </Fragment>
    )
  }
};

const shake = {
  '0%': {
    transform: 'translateY(0)',
  },
  '25%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
}

const opac = {
  from: {
    opacity: '0.5'
  },
  to: {
    opacity: '1'
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem',
    ':hover': {
      cursor: 'pointer',
      animationName: [shake, opac],
      animationDuration: '0.5s, 1s',
      animationIterationCount: 3,
    },
  },

  hover: {
    ':hover': {
      cursor: 'pointer',
      animationName: [shake, opac],
      animationDuration: '0.5s, 1s',
      animationIterationCount: 3
    },
  },

  Notifications: {
    border: '2px dashed #c7254e',
    padding: '2rem',
    float: 'right',
    '@media (max-width: 900px)': {
      border: 'none',
      backgroundColor: 'white',
      width: '85%',
      gridRow: '2',
      zIndex: '1000',
      // display: 'block',
      height: '100vh',
      overflow: 'hidden',
    }
  },

  hide: {
    '@media (max-width: 900px)': {
      display: 'none',
    }
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleHideDrawer: () => {},
  handleDisplayDrawer: () => {},
  markNotificationAsRead: () => {},
}

export default Notifications;
