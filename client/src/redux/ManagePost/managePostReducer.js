import { GET_REACTION_ON_POST } from '../actionConstant';

const initialState = { reactions: {} };

export const managePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REACTION_ON_POST:
            const { postId, reaction } = action.payload;

            return {
                ...state,
                reactions: {
                    ...state.reactions,
                    [postId]: reaction,
                },
            };

        default:
            return state;
    }
};
