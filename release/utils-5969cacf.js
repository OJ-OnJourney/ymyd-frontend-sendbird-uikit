import format from 'date-fns/format';

var DEFAULT_URL_PREFIX = 'https://static.sendbird.com/sample/cover/cover_';
var getOpenChannelAvatar = function getOpenChannelAvatar(channel) {
  if (channel && channel.coverUrl) {
    return channel.coverUrl;
  }
};
var getChannelAvatarSource = function getChannelAvatarSource(channel, currentUserId) {
  if (channel && channel.coverUrl) {
    if (!new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
      return channel.coverUrl;
    }
  }

  return channel && channel.members ? channel.members.filter(function (member) {
    return member.userId !== currentUserId;
  }).map(function (_a) {
    var profileUrl = _a.profileUrl;
    return profileUrl;
  }) : [];
};
var useDefaultAvatar = function useDefaultAvatar(channel) {
  if (channel && channel.coverUrl) {
    if (new RegExp("^" + DEFAULT_URL_PREFIX).test(channel.coverUrl)) {
      return true;
    }

    return false;
  }

  return true;
};

var noop = function noop() {};
var getMessageCreatedAt = function getMessageCreatedAt(message) {
  return format(message.createdAt, 'p');
};
var getSenderName = function getSenderName(message) {
  return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
};
var getSenderNameByType = function getSenderNameByType(message, type) {
  if (message.sender) {
    // console.log("getSenderNameByType", message, type, message.sender)
    if (type && message.sender.metaData && message.sender.metaData[type]) return message.sender.metaData[type];
    return message.sender.friendName || message.sender.nickname || message.sender.userId;
  }

  return null;
};
var getSenderProfileUrl = function getSenderProfileUrl(message) {
  return message.sender && message.sender.profileUrl;
};

export { getMessageCreatedAt as a, getSenderName as b, getSenderProfileUrl as c, getSenderNameByType as d, getOpenChannelAvatar as e, getChannelAvatarSource as g, noop as n, useDefaultAvatar as u };
//# sourceMappingURL=utils-5969cacf.js.map
