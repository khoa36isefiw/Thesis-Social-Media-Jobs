import { DISABLE_REPLY_MESSAGE, IS_MESSAGE_REPLY_SENT, IS_REPLY } from '../actionConstant';

const initialState = {
    isMessageReplied: false, // know the message will be selected
    repliedMessageContent: [], // content the message is selected to reply
    isReplyMessageSend: false,
    currentReplyIndex: null,
};

export const isMessageRepliedReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_REPLY:
            return {
                ...state,
                isMessageReplied: true,
                repliedMessageContent: [...state.repliedMessageContent, action.payload.index],
                currentReplyIndex: action.payload,
            };
        case DISABLE_REPLY_MESSAGE: {
            return {
                ...state,
                isMessageReplied: false,
                // currentReplyIndex: null,
            };
        }
        case IS_MESSAGE_REPLY_SENT: {
            return {
                ...state,
                // isMessageReplied: false,
                isReplyMessageSend: true,
                currentReplyIndex: null,
                // repliedMessageContent: [],
            };
        }

        default:
            return state;
    }
};
