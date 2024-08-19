import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html } = this.props;
    const liStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

    return (
      <li
        className={css(liStyle, styles.li)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  li: {
    borderBottom: '1px solid black',
    padding: '10px 8px',
    fontSize: '20px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

export default NotificationItem;

