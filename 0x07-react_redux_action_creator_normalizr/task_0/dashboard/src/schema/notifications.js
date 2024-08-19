// dashboard/src/schema/notifications.js
import * as notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId);
}

