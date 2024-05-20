import { ADD_MESSAGE, DELETE_MESSAGE } from '../actionConstant';

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message,
});

export const deleteMessage = (message) => ({
    type: DELETE_MESSAGE,
    payload: message,
});
