import {
    GET_BIRTH_DATE,
    GET_DAY,
    GET_MONTH,
    SET_SELECTED_IMAGE_ROTATION_ANGLE,
    GET_YEAR,
    SAVE_ACCOUNT_SIGNUP,
    SET_SELECTED_FILTER_INDEX,
    USER_LOGGED_IN_INFORMATION,
    HIDE_MODAL,
} from '../actionConstant';

// SAVE LIST ACCOUNTS
export const saveAccountRegistered = (account) => ({
    type: SAVE_ACCOUNT_SIGNUP,
    payload: { account },
});

export const setLoggedInUser = (user) => ({
    type: USER_LOGGED_IN_INFORMATION,
    payload: { user },
});

export const getBirthDate = (birthday) => ({
    type: GET_BIRTH_DATE,
    payload: { birthday },
});

export const getDay = (day) => ({
    type: GET_DAY,
    payload: { day },
});

export const getMonth = (month) => ({
    type: GET_MONTH,
    payload: { month },
});

export const getYear = (year) => ({
    type: GET_YEAR,
    payload: { year },
});

export const setSelectedFilterIndex = (index) => ({
    type: SET_SELECTED_FILTER_INDEX,
    payload: index,
});

export const setSelectedImageRotationAngle = (angle) => ({
    type: SET_SELECTED_IMAGE_ROTATION_ANGLE,
    payload: angle,
});

export const hideModal = () => ({
    type: HIDE_MODAL,
});
