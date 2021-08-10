import format from 'date-fns/format';

export const getMessageCreatedAt = (message) => format(message.createdAt, 'HH:mm');

export default {
  getMessageCreatedAt,
};
