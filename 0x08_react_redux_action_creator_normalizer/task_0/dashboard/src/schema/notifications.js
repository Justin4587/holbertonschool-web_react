import notifi from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return (notifi)
    .filter(userNoti => userNoti.author.id === userId)
    .map(userNoti => userNoti.context);
}
export default getAllNotificationsByUser;
