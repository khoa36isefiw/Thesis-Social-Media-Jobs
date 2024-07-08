import {
    GET_BIRTH_DATE,
    GET_DAY,
    GET_MONTH,
    GET_YEAR,
    PHOTO_VIEWING_RIGHTS,
    SAVE_ACCOUNT_SIGNUP,
    USER_LOGGED_IN_INFORMATION,
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
