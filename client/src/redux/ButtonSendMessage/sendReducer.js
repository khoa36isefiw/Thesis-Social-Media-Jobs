import { DISABLE_ENTER_KEY, ENABLE_ENTER_KEY } from '../actionConstant';

const initialState = { isEnterKeyEnabled: true };

export const sendReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_ENTER_KEY:
            return {
                ...state,
                isEnterKeyEnabled: true,
            };
        case DISABLE_ENTER_KEY:
            return {
                ...state,
                isEnterKeyEnabled: false,
            };
        default:
            return state;
    }
};
