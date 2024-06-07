import { IS_ADD_CHAT_MESSAGE, REMOVE_CHAT_MESSAGE } from '../actionConstant';

const initialState = { isClickSendMessage: false, listUserInformation: [] };
// function find USER ID
// export const findUserID = (listUserInformation, userID) => {
//     return listUserInformation.findIndex((user) => user._id === userID);
// };

export const addChatMessageReducer = (state = initialState, action) => {
    console.log('Reducer received action: ', action);
    switch (action.type) {
        case IS_ADD_CHAT_MESSAGE:
            console.log('Updating state with new user information:', action.payload);
            return {
                ...state,
                isClickSendMessage: true,
                listUserInformation: [...state.listUserInformation, action.payload],
            };

        case REMOVE_CHAT_MESSAGE:
            // const userID = action.payload.userID;
            const { userID } = action.payload;
            console.log('User ID: ', userID);
            // filter listUserInformation
            const listUserMessageAfterMoving = state.listUserInformation.filter(
                (user) => user.userID !== userID,
            );
            console.log('List user information after removing: ', listUserMessageAfterMoving);
            return {
                ...state,
                isClickSendMessage: false,
                listUserInformation: listUserMessageAfterMoving,
            };
        default:
            return state;
    }
};
