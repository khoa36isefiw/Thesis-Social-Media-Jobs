import { SAVE_ACCOUNT_SIGNUP } from '../actionConstant';

const initialState = { accountsList: [] };

export const manageAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ACCOUNT_SIGNUP:
            const { account } = action.payload;

            return {
                ...state,
                accountsList: [...state.accountsList, account],
            };

        default:
            return state;
    }
};
