import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
      {/* Add notification items here */}
    </div>
  );
}

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid #e1354b',
    padding: '10px',
    marginBottom: '20px',
  },
});

export default Notifications;

