import { ADD_MESSAGE, DELETE_MESSAGE } from '../actionConstant';

const initialState = {
    messages: [],
    deletedMessages: [],
    latestMessageDeleted: false,
};

// best version --> but till lỏd

export const convertToTimestamp = (dateString) => {
    const date = new Date(dateString);
    return date.getTime();
};

export const showMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                latestMessageDeleted: false,
            };
        case DELETE_MESSAGE:
            const message = action.payload;
            // return an array contains the information of message will be removed
            console.log('Array will be removed: ', message);

            const updatedMessages = state.messages.filter(
                (messageRemove) => messageRemove !== message,
            );
            console.log('List messages after removing: ', updatedMessages);
            const latestMessage = state.messages[state.messages.length - 1];
            console.log('Get the newest message: ', latestMessage);
            const lastestMessageToTimestamp = convertToTimestamp(latestMessage[3]);
            console.log('Get the timestamp of the newest message: ', lastestMessageToTimestamp);
            const getMessageDelete = convertToTimestamp(message[3]);
            console.log('Get the timestamp of array: ', getMessageDelete);

            const isLatestDeleted =
                lastestMessageToTimestamp && lastestMessageToTimestamp === getMessageDelete;

            console.log('isLatestDeleted: ', isLatestDeleted);

            return {
                ...state,
                messages: updatedMessages,
                latestMessageDeleted: isLatestDeleted,
            };
        default:
            return state;
    }
};
