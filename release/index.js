import { S as SendbirdSdkContext } from './LocalizationContext-12387caf.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-12387caf.js';
export { default as SendBirdProvider } from './SendbirdProvider.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-a85c0eaa.js';
import 'css-vars-ponyfill';
export { s as sendBirdSelectors } from './index-998a5e7d.js';
export { default as ChannelList } from './ChannelList.js';
import './index-9f12be5e.js';
import './index-a45cb81d.js';
import './utils-43a307fa.js';
import './LeaveChannel-c88d2bce.js';
import 'date-fns/isToday';
import 'date-fns/format';
import 'date-fns/isYesterday';
import './type-0296584d.js';
import './utils-cfdeb084.js';
import 'react-dom';
import './index-d9fdea46.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import './index-ad6cde30.js';
import 'date-fns/isSameDay';
import './utils-6309e2aa.js';
import 'date-fns/formatDistanceToNowStrict';
export { default as ChannelSettings } from './ChannelSettings.js';
import './index-64113db4.js';
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
