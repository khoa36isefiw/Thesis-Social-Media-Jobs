import {
    ADD_COMMENT,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
} from '../actionConstant';

export const setReactionOnPost = (postId, reaction) => ({
    type: GET_REACTION_ON_POST,
    payload: { postId, reaction },
});

// expor

export const setReactionOnCommentInPost = (postID, commentId, reaction) => ({
    type: GET_REACTION_IN_COMMENT_ON_POST,
    payload: { postID, commentId, reaction },
});

export const addComment = (postID, comment) => ({
    type: ADD_COMMENT,
    payload: { postID, comment },
});
