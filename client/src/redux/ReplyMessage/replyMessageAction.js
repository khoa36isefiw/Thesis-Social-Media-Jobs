// define actions
import { DISABLE_REPLY_MESSAGE, IS_MESSAGE_REPLY_SENT, IS_REPLY } from '../actionConstant';

export const isReplyMessage = (msgIndex) => ({
    type: IS_REPLY, // only it initial
    payload: msgIndex,
});

export const disableReplyMessage = () => ({
    type: DISABLE_REPLY_MESSAGE,
});

export const isMessageReplySent = () => ({
    type: IS_MESSAGE_REPLY_SENT,
});
