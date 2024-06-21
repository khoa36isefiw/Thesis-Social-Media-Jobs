import {
    ADD_COMMENT,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
} from '../actionConstant';

const initialState = { reactions: {}, comments: {}, commentReactions: {} };

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

        case ADD_COMMENT:
            const { postID, comment } = action.payload;
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [postID]: [...(state.comments[postID] || []), comment],
                },
            };

        case GET_REACTION_IN_COMMENT_ON_POST:
            const { postID: pID, commentId, reaction: cReaction } = action.payload;
            return {
                ...state,
                commentReactions: {
                    // ...state.commentReactions,
                    [pID]: {
                        ...state.commentReactions[pID],
                        [commentId]: cReaction,
                    },
                },
            };

        default:
            return state;
    }
};
