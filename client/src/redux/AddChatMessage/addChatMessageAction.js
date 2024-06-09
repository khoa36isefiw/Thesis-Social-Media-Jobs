import { GET_USER_ID, IS_ADD_CHAT_MESSAGE, REMOVE_CHAT_MESSAGE } from '../actionConstant';

export const startAChatMessage = (userInformation) => ({
    type: IS_ADD_CHAT_MESSAGE,
    payload: userInformation, // list information
});

export const removeAChatMessage = (userID) => ({
    type: REMOVE_CHAT_MESSAGE,
    payload: { userID }, // remove
});

export const getUserID = (userID) => ({ type: GET_USER_ID, payload: { userID } });
