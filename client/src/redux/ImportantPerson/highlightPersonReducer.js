// starred users
import { HIGH_LIGHT_PERSON } from '../actionConstant';

const initialState = { isHighlight: false };

export const highlightPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGH_LIGHT_PERSON:
            return {
                ...state,
                isHighlight: !state.isHighlight,
            };
        default:
            return state;
    }
};
