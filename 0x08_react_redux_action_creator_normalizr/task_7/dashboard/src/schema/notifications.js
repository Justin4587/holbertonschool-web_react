import * as notifi from '../../../../notifications.json';
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
  const messages = whatsNormal.entities.messages;
  const notifications = whatsNormal.entities.notifications;
  const userNoti = [];

  // console.log(filtered.entities)
  console.log(userNoti)

  for (const ID in notifications) {
    if (notifications[ID].author === userId) {
      userNoti.push(messages[notifications[ID].context]);
    }
  }
  // console.log(filtered.entities)
  console.log(userNoti)
  return (userNoti)
    // .filter(userNoti => userNoti.author.id === userId)
    // .map(userNoti => userNoti.context);
}

export { getAllNotificationsByUser, whatsNormal };
