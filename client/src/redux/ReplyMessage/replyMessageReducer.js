import { DISABLE_REPLY_MESSAGE, IS_MESSAGE_REPLY_SENT, IS_REPLY } from '../actionConstant';

const initialState = {
    isMessageReplied: false,
    repliedMessageContent: [],
    isReplyMessageSend: false,
};

export const isMessageRepliedReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_REPLY:
            return {
                ...state,
                isMessageReplied: true,
                repliedMessageContent: action.payload,
            };
        case DISABLE_REPLY_MESSAGE: {
            return {
                ...state,
                isMessageReplied: false,
                // repliedMessageContent: state.isMessageReplied ? [] : state.repliedMessageContent,
            };
        }
        case IS_MESSAGE_REPLY_SENT: {
            return {
                ...state,
                isMessageReplied: false,
                isReplyMessageSend: true,
                // repliedMessageContent: [],
            };
        }

        default:
            return state;
    }
};
