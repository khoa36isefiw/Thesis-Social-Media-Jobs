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
    SET_SELECTED_FILTER_INDEX_BG,
    SET_SELECTED_BG_ROTATION_ANGLE,
    UPDATE_ACCOUNT_INFORMATION,
} from '../actionConstant';

// SAVE LIST ACCOUNTS
export const saveAccountRegistered = (account) => ({
    type: SAVE_ACCOUNT_SIGNUP,
    payload: { account },
});

export const updateAccountInformation = (userId, updatedInfor) => ({
    type: UPDATE_ACCOUNT_INFORMATION,
    payload: { userId, updatedInfor },
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

// for user photo
// export const setSelectedFilterIndex = (index) => ({ // initial
//     type: SET_SELECTED_FILTER_INDEX,
//     payload: index,
// });

export const setSelectedFilterIndex = ({ filter, userId }) => ({
    type: SET_SELECTED_FILTER_INDEX,
    payload: { filter, userId },
});

// export const setSelectedImageRotationAngle = (angle) => ({
//     type: SET_SELECTED_IMAGE_ROTATION_ANGLE,
//     payload: angle,
// });

// with userId
export const setSelectedImageRotationAngle = ({ angle, userId }) => ({
    type: SET_SELECTED_IMAGE_ROTATION_ANGLE,
    payload: { angle, userId },
});

// for user background image photo
export const setSelectedBackgroundFilterIndex = (bgIndex) => ({
    type: SET_SELECTED_FILTER_INDEX_BG,
    payload: bgIndex,
});

export const setSelectedBackgroundRotationAngle = (bgAngle) => ({
    type: SET_SELECTED_BG_ROTATION_ANGLE,
    payload: bgAngle,
});

export const hideModal = () => ({
    type: HIDE_MODAL,
});
