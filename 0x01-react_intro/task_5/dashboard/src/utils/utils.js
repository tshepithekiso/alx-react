export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Returns a footer copy based on the isIndex argument.
 * @param {boolean} isIndex - Indicates if the footer is for the index page.
 * @returns {string} The footer copy.
 */
export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

/**
 * Returns the latest notification.
 * @returns {string} The latest notification.
 */
export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
