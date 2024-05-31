// define actions
import { DISABLE_REPLY_MESSAGE, IS_REPLY } from '../actionConstant';

export const isReplyMessage = (msgIndex) => ({
    type: IS_REPLY, // only it initial
    payload: msgIndex,
});

export const disableReplyMessage = () => ({
    type: DISABLE_REPLY_MESSAGE,
});
