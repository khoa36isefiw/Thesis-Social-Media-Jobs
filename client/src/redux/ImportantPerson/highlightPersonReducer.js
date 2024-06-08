// starred users
import { HIGH_LIGHT_PERSON, REMOVE_STAR } from '../actionConstant';

const initialState = { isHighlight: false, listHighlightedUser: [] };

export const highlightPersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGH_LIGHT_PERSON:
            const { userID } = action.payload;
            console.log('userID: ', userID);
            console.log('List user is choose: ', state.listHighlightedUser);
            const isUserHighlighted = state.listHighlightedUser.includes(userID);

            return {
                ...state,
                isHighlight: !state.isHighlight,
                listHighlightedUser: isUserHighlighted
                    ? state.listHighlightedUser.filter((id) => id !== userID)
                    : [...state.listHighlightedUser, userID],
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
