// define actions
import {
    DISABLE_REPLY_MESSAGE,
    IS_MESSAGE_REPLY_SENT,
    IS_REPLY,
    SET_CURRENT_REPLY_INDEX,
} from '../actionConstant';

export const isReplyMessage = (msgIndex) => ({
    type: IS_REPLY, // only it initial
    payload: { index: msgIndex },
});

export const disableReplyMessage = () => ({
    type: DISABLE_REPLY_MESSAGE,
});

export const isMessageReplySent = () => ({
    type: IS_MESSAGE_REPLY_SENT,
});

// get reply message index
export const setCurrentReplyIndex = (index) => ({
    type: SET_CURRENT_REPLY_INDEX,
    payload: index,
});
