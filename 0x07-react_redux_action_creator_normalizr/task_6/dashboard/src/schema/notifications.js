// task_2/dashboard/src/schema/notifications.js
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity with the idAttribute set to 'guid'
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

// Define the notification entity with author and context relationships
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const { notifications, users, messages } = normalizedData.entities;

  return Object.values(notifications).filter(
    (notification) => notification.author === userId
  ).map((notification) => ({
    guid: notification.context,
    isRead: messages[notification.context].isRead,
    type: messages[notification.context].type,
    value: messages[notification.context].value,
  }));
};

export { normalizedData };

