import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id='0' } = this.props;
    const style = css(type === 'urgent' ? styles.urgent : styles.default);
    return (
      <>
        {value
          ? <li className={style} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
          : null
        }
        {html
          ? <li className={style} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
          : null
        }
      </>
    );
  }
};

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
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyle: 'none',
      backgroundColor: 'white',
    }
  },

  urgent: {
    color: 'red',
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyle: 'none',
      backgroundColor: 'white',
    }
  }
})

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
}

export default NotificationItem;
