import notifi from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity("users")

const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
})

const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

const whatsNormal = normalize(notifi, [notification])

const getAllNotificationsByUser = (userId) => {
  return (notifi)
    .filter(userNoti => userNoti.author.id === userId)
    .map(userNoti => userNoti.context);
}

export { getAllNotificationsByUser, whatsNormal };
