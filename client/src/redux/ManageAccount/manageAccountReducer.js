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
    SET_SELECTED_FILTER_INDEX_BG,
    SET_SELECTED_BG_ROTATION_ANGLE,
} from '../actionConstant';
import DefaultBackgroundImage from '../../assets/images/DefaultBackgroundImage.jpeg';
const initialState = {
    // accountsList: [], // initial state
    // use for testing data
    accountsList: [
        {
            firstName: 'Tido',
            lastName: 'Kang',
            birthDate: '12-6-2000',
            userName: 'tido',
            password: 'tido',
            // default image
            userPhoto: {
                imgUrl: 'https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg',
                imageStyle: null,
                imageRotationAngle: 0,
            },
            // default background image/ photo for user who logged in
            userBackgroundPhoto: {
                bgUrl: DefaultBackgroundImage,
                bgStyle: null,
                bgRotationAngle: 0,
            },

            followers: 0,
        },
    ],
    // loggedInUser: 'Luna Kei', // initial state
    loggedInUser: {
        // use for test data
        firstName: 'Tido',
        lastName: 'Kang',
        birthDate: '12-6-2000',
        userName: 'tido',
        password: 'tido',
        // default image
        userPhoto: {
            imgUrl: 'https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg',
            imageStyle: null,
            imageRotationAngle: 0,
        },
        // default background image/ photo for user who logged in
        userBackgroundPhoto: {
            bgUrl: DefaultBackgroundImage,
            bgStyle: null,
            bgRotationAngle: 0,
        },

        followers: 0,
    },

    birthDate: '',
    day: '',
    month: '',
    year: '',
    setViewingRights: 'All Aikotoba members',
    selectedFilterIndex: 0,
    selectedImageAngle: 0,
    selectedBackgroundFilterIndex: 0,
    selectedBackgroundAngle: 0,
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
        case SET_SELECTED_FILTER_INDEX_BG:
            return {
                ...state,
                selectedBackgroundFilterIndex: action.payload,
            };
        case SET_SELECTED_BG_ROTATION_ANGLE:
            return {
                ...state,
                selectedBackgroundAngle: action.payload,
            };
        default:
            return state;
    }
};
