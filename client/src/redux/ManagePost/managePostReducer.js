import { GET_REACTION_ON_POST } from '../actionConstant';

const initialState = { reactionIs: '' };

export const managePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REACTION_ON_POST:
            const { reaction } = action.payload;
            // const { reaction: newReaction } = action.payload;
            console.log('reaction is selected: ', reaction);
            console.log('reactionIs: ', state.reactionIs);
            return {
                ...state,
                reactionIs: reaction,
            };

        default:
            return state;
    }
};
