import { S as SendbirdSdkContext } from './LocalizationContext-61e7d461.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-61e7d461.js';
export { default as SendBirdProvider } from './SendbirdProvider.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-a85c0eaa.js';
import 'css-vars-ponyfill';
export { s as sendBirdSelectors } from './index-3b4b8b19.js';
export { default as ChannelList } from './ChannelList.js';
import './index-5cd3e021.js';
import './index-2d2cdc32.js';
import './utils-43a307fa.js';
import './LeaveChannel-fdb7b32f.js';
import 'date-fns/isToday';
import 'date-fns/format';
import 'date-fns/isYesterday';
import './type-0296584d.js';
import './utils-cfdeb084.js';
import 'react-dom';
import './index-bb99f4be.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import './index-6bc63ce6.js';
import 'date-fns/isSameDay';
import './utils-6309e2aa.js';
import 'date-fns/formatDistanceToNowStrict';
export { default as ChannelSettings } from './ChannelSettings.js';
import './index-8003565a.js';
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
