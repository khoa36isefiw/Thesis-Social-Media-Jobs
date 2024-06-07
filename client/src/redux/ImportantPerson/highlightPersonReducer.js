// starred users
import { HIGH_LIGHT_PERSON, REMOVE_STAR } from '../actionConstant';

const initialState = { isHighlight: false, highlightedUser: null };

export const highlightPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGH_LIGHT_PERSON:
            const { userID } = action.payload;
            console.log('userID: ', userID);

            return {
                ...state,
                isHighlight: !state.isHighlight,
                highlightedUser: userID,
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
