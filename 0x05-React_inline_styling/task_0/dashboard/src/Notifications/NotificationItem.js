import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id='0' } = this.props;
    return (
      <>
        {value
          ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
          : null
        }
        {html
          ? <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
          : null
        }
      </>
    );
  }
};

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
