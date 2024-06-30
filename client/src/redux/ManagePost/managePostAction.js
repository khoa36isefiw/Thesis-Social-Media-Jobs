import {
    ADD_COMMENT,
    ADD_NEW_POSTS,
    COMMENT_PRIVACY,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
    POST_SETTINGS_PRIVACY,
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

export const addNewPosts = (postData) => ({
    type: ADD_NEW_POSTS,
    payload: {
        postData: {
            ...postData,
            timestamp: new Date().toISOString(), // thêm thời gian hiện tại
        },
    },
});

export const commentControlSelection = (privacy) => ({
    type: COMMENT_PRIVACY,
    payload: { privacy },
});

export const postSettingsPrivacySelection = (postPrivacy) => ({
    type: POST_SETTINGS_PRIVACY,
    payload: { postPrivacy },
});
