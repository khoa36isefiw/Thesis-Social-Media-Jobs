import {
    GET_BIRTH_DATE,
    GET_DAY,
    GET_MONTH,
    SET_SELECTED_IMAGE_ROTATION_ANGLE,
    GET_YEAR,
    PHOTO_VIEWING_RIGHTS,
    SAVE_ACCOUNT_SIGNUP,
    SET_SELECTED_FILTER_INDEX,
    USER_LOGGED_IN_INFORMATION,
} from '../actionConstant';

const initialState = {
    accountsList: [],
    loggedInUser: 'Luna Kei',
    birthDate: '',
    day: '',
    month: '',
    year: '',
    setViewingRights: 'All Aikotoba members',
    selectedFilterIndex: 0,
    selectedImageAngle: 0,
};

export const manageAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACCOUNT_SIGNUP:
            const { account } = action.payload;

            return {
                ...state,
                accountsList: [...state.accountsList, account],
            };
        case USER_LOGGED_IN_INFORMATION:
            const { user } = action.payload;
            return {
                ...state,
                loggedInUser: user,
            };

        case GET_BIRTH_DATE:
            const { birthday } = action.payload;
            return {
                ...state,
                birthDate: birthday,
            };

        case GET_DAY:
            const { day } = action.payload;
            return {
                ...state,
                day: day,
            };

        case GET_MONTH:
            const { month } = action.payload;
            return {
                ...state,
                month: month,
            };
        case GET_YEAR:
            const { year } = action.payload;
            return {
                ...state,
                year: year,
            };
        case PHOTO_VIEWING_RIGHTS:
            const { viewing } = action.payload;
            return {
                ...state,
                setViewingRights: viewing,
            };
        case SET_SELECTED_FILTER_INDEX:
            return {
                ...state,
                selectedFilterIndex: action.payload,
            };
        case SET_SELECTED_IMAGE_ROTATION_ANGLE:
            return {
                ...state,
                selectedImageAngle: action.payload,
            };
        default:
            return state;
    }
};
