import format from 'date-fns/format';
import { M as MessageStatusType } from './type-0296584d.js';

var copyToClipboard = function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData('Text', text);
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return false;
};
var getMessageCreatedAt = function getMessageCreatedAt(message) {
  return format(message.createdAt || 0, 'p');
};
var getSenderNameByType = function getSenderNameByType(message, type) {
  if (message.sender) {
    console.log("getSenderNameByType", message, message.sender);
    if (type && message.sender.meta && message.sender.meta[type]) return message.sender.meta[type];
    return message.sender.friendName || message.sender.nickname || message.sender.userId;
  }

  return null;
};
var getSenderProfileUrl = function getSenderProfileUrl(message) {
  return message.sender && message.sender.profileUrl;
};
var getIsSentFromStatus = function getIsSentFromStatus(status) {
  return status === MessageStatusType.SENT || status === MessageStatusType.DELIVERED || status === MessageStatusType.READ;
};

export { getSenderNameByType as a, getMessageCreatedAt as b, copyToClipboard as c, getIsSentFromStatus as d, getSenderProfileUrl as g };
//# sourceMappingURL=utils-d96b6063.js.map
