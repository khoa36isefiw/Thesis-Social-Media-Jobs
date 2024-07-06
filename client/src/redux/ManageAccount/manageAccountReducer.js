import {
    GET_BIRTH_DATE,
    GET_DAY,
    GET_MONTH,
    GET_YEAR,
    SAVE_ACCOUNT_SIGNUP,
} from '../actionConstant';

const initialState = { accountsList: [], birthDate: '', day: '', month: '', year: '' };

export const manageAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACCOUNT_SIGNUP:
            const { account } = action.payload;

            return {
                ...state,
                accountsList: [...state.accountsList, account],
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

        default:
            return state;
    }
};
