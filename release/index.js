import { S as SendbirdSdkContext } from './LocalizationContext-daa4f283.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-daa4f283.js';
export { default as SendBirdProvider } from './SendbirdProvider.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-a85c0eaa.js';
import 'css-vars-ponyfill';
export { s as sendBirdSelectors } from './index-51e4eac7.js';
export { default as ChannelList } from './ChannelList.js';
import './index-c6651b9b.js';
import './index-bf9c565d.js';
import './utils-fe4679f2.js';
import './LeaveChannel-c2e8872e.js';
import 'date-fns/isToday';
import 'date-fns/format';
import 'date-fns/isYesterday';
import './type-0296584d.js';
import './utils-cfdeb084.js';
import 'react-dom';
import './index-526c3c60.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import './index-63b0b79c.js';
import 'date-fns/isSameDay';
import './utils-8c82a664.js';
import 'date-fns/formatDistanceToNowStrict';
export { default as ChannelSettings } from './ChannelSettings.js';
import './index-5a588eda.js';
export { default as App } from './App.js';
export { default as MessageSearch } from './MessageSearch.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
