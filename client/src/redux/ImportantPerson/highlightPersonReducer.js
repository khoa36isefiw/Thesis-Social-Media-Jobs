// starred users
import { HIGH_LIGHT_PERSON, REMOVE_STAR } from '../actionConstant';

const initialState = { isHighlight: false };

export const highlightPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGH_LIGHT_PERSON:
            return {
                ...state,
                isHighlight: !state.isHighlight,
            };
        case REMOVE_STAR:
            return {
                ...state,
                isHighlight: false,
            };
        default:
            return state;
    }
};
