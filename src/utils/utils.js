import format from 'date-fns/format';

export const noop = () => {};

export const getMessageCreatedAt = (message) => format(message.createdAt, 'HH:mm');

export const getSenderName = (message) => (
  message.sender && (
    message.sender.friendName
    || message.sender.nickname
    || message.sender.userId
  )
);

export const getSenderNameByType = (message, type) => {
  if(message.sender){
    // console.log("getSenderNameByType", message, type, message.sender)
    if(type && message.sender.metaData && message.sender.metaData[type])
      return message.sender.metaData[type];
    
    return (
      message.sender.friendName
      || message.sender.nickname
      || message.sender.userId
    )
  }

  return null
};

export const getSenderProfileUrl = (message) => message.sender && message.sender.profileUrl;

export default {
  getMessageCreatedAt,
  getSenderName,
  getSenderProfileUrl,
};
