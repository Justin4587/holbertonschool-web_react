
export const getFullYear = () => {
  return new Date().getFullYear()
};

export const getFooterCopy = (isIndex) => isIndex ? 'Holberton School' : 'Holberton School main dashboard';

export const getLatestNotification = () => "<li data-priority='urgent'><strong>Urgent requirement</strong> - complete by EOD</li>";
