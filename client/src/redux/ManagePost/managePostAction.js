import { ADD_COMMENT, GET_REACTION_ON_POST } from '../actionConstant';

export const setReactionOnPost = (postId, reaction) => ({
    type: GET_REACTION_ON_POST,
    payload: { postId, reaction },
});

export const addComment = (postID, comment) => ({
    type: ADD_COMMENT,
    payload: { postID, comment },
});
