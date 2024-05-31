// starred users
import { DISABLE_REPLY_MESSAGE, IS_REPLY } from '../actionConstant';

const initialState = { isMessageReplied: false, repliedMessageContent: [] };

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
                repliedMessageContent: [],
            };
        }
        default:
            return state;
    }
};
