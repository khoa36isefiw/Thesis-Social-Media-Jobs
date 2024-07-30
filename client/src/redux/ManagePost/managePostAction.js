import {
    ADD_COMMENT,
    ADD_NEW_POSTS,
    COMMENT_PRIVACY,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
    GET_REACTION_RESPONSE_COMMENTS,
    POST_SETTINGS_PRIVACY,
    REPLY_COMMENTS,
    SAVE_PRIVACY_SELECTED,
} from '../actionConstant';

export const setReactionOnPost = (postId, reaction, userInfor) => ({
    type: GET_REACTION_ON_POST,
    payload: { postId, reaction, userInfor },
});

// expor

export const setReactionOnCommentInPost = (postID, commentId, reaction) => ({
    type: GET_REACTION_IN_COMMENT_ON_POST,
    payload: { postID, commentId, reaction },
});

export const setReactionOnResponseCommentInPost = (
    postID,
    commentId,
    replyCommentId,
    reaction,
) => ({
    type: GET_REACTION_RESPONSE_COMMENTS,
    payload: { postID, commentId, replyCommentId, reaction },
});

export const addComment = (postID, comment, userInfor) => {
    const timeStamp = new Date().toISOString(); // Get the current timestamp
    return {
        type: ADD_COMMENT,
        payload: { postID, comment, timeStamp, userInfor },
    };
};

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

export const privacySelected = (privacySelected) => ({
    type: SAVE_PRIVACY_SELECTED,
    payload: { privacySelected },
});
export const replyComments = (postID, commentID, replyComments, userID, userName, userPhoto) => {
    const timeStamp = new Date().toISOString(); // Get the current timestamp
    return {
        type: REPLY_COMMENTS,
        payload: { postID, commentID, replyComments, timeStamp, userID, userName, userPhoto },
    };
};

// export const replyComments = (postID, commentID, replyComments) => ({
//     type: REPLY_COMMENTS,
//     payload: { commentID, replyComments, postID },
// });
