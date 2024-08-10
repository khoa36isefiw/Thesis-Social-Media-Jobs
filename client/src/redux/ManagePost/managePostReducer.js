import {
    ADD_COMMENT,
    ADD_NEW_POSTS,
    COMMENT_PRIVACY,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
    GET_REACTION_RESPONSE_COMMENTS,
    HIDE_COMMENT,
    POST_SETTINGS_PRIVACY,
    REPLY_COMMENTS,
    SAVE_PRIVACY_SELECTED,
} from '../actionConstant';

const initialState = {
    reactions: {},

    comments: {},
    repliedComments: {}, // initial state
    // repliedComments: [],
    commentReactions: {},
    listReactionsInResponseToComment: [],
    listPostsData: [],
    commentControlSelection: 'Anyone', // include 2 cases: Anyone, connections only, no one || connections only, no one
    commentControlPrivateSelection: 'Connections only',
    postSettingsPrivacySelection: 'Anyone', // include: Anyone, Connections only
    savePrivacySelected: 'Anyone', // only 2 case: Anyone or Connections only
    listUsersReaction: {},
    hiddenComments: {}, // {[postId]: [commentId1, commenntId2, ...]
    isDeleted: false,
};

export const managePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REACTION_ON_POST: {
            const { postId, reaction, userInfor: usrInfor } = action.payload;

            const existingReactions = state.reactions[postId] || [];

            const userReactionIndex = existingReactions.findIndex(
                (r) => r.usrInfor.userId === usrInfor.userId,
            );

            let updatedReactions;
            if (userReactionIndex !== -1) {
                // User has already reacted, replace the reaction
                updatedReactions = [
                    ...existingReactions.slice(0, userReactionIndex),
                    // { reaction, usrInfor },
                    // ...existingReactions.slice(userReactionIndex + 1),
                ];
            } else {
                // User has not reacted, add new reaction
                updatedReactions = [...existingReactions];
            }

            updatedReactions = [...updatedReactions, { reaction, usrInfor }];

            //-------- list who reacted
            let updatedListUsersReaction;
            const existingUserReactions = state.listUsersReaction[postId] || [];
            const userReactionIndexInList = existingUserReactions.findIndex(
                (r) => r.userReactedId === usrInfor.userId,
            );

            if (userReactionIndexInList !== -1) {
                // exist
                // user has already reacted, remove old reaction from list
                updatedListUsersReaction = [
                    ...existingUserReactions.slice(0, userReactionIndexInList),
                    ...existingUserReactions.slice(userReactionIndexInList + 1), // add new reaction, replace the current reactions to new
                ];
            } else {
                // does not exist
                updatedListUsersReaction = [...existingUserReactions];
            }
            console.log('before: ', updatedListUsersReaction);

            // add the new reaction
            updatedListUsersReaction = [
                ...updatedListUsersReaction,
                {
                    userReactedId: usrInfor.userId,
                    userReactionIcon: reaction.srcImage,
                    userNameReacted: usrInfor.firstName + ' ' + usrInfor.lastName,
                    userReactedImage: usrInfor.userPhoto,
                    userReactedPosition: 'Front-End Developer',
                },
            ];

            console.log('after: ', updatedListUsersReaction);

            return {
                ...state,
                reactions: {
                    ...state.reactions,
                    [postId]: updatedReactions,
                },
                listUsersReaction: {
                    ...state.listUsersReaction,
                    [postId]: updatedListUsersReaction,
                },
            };
        }

        case ADD_COMMENT:
            const { postID, comment, userInfor } = action.payload;
            // const { postID, comment, timeStamp: timestamp } = action.payload;
            console.log('previous comments: ', state.comments);
            return {
                ...state,
                comments: {
                    // initial
                    ...state.comments,
                    // [postID]: [...(state.comments[postID] || []), comment, userInfor], // initial
                    [postID]: [...(state.comments[postID] || []), [comment, userInfor]],
                },
            };
        // case HIDE_COMMENT:
        //     const { postId, commentId: commnetID } = action.payload;
        //     // get list comments is hidden of this post
        //     const hiddenCommentsForPost = state.hiddenComments[postId] || [];
        //     return {
        //         // update commentId is hidden to list
        //         ...state,
        //         hiddenComments: {
        //             ...state.hiddenComments,
        //             [postId]: [...hiddenCommentsForPost, commnetID],
        //         },
        //     };

        case HIDE_COMMENT: {
            const { postId, commentId: commentID } = action.payload;
            const updatedComments = state.comments[postId].map((comment, index) => {
                if (index === commentID) {
                    return {
                        ...comment,
                        isDeleted: true,
                    };
                }
                return comment;
            });
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [postId]: updatedComments,
                },
            };
        }
        case REPLY_COMMENTS:
            const {
                postID: pstID,
                userID,
                commentID: cmtID,
                replyComments: replyCmt,
                timeStamp,
                userName,
                userPhoto,
            } = action.payload;
            return {
                ...state,
                repliedComments: {
                    ...state.repliedComments,
                    [pstID]: {
                        // accesses the current replies for the specific post and get all previous data.
                        ...state.repliedComments[pstID],
                        // accesses the current replies for the specific comment.
                        [cmtID]: [
                            ...(state.repliedComments[pstID]?.[cmtID] || []),
                            { replyCmt, timeStamp, userID, userName, userPhoto },
                        ],
                    },
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

        case GET_REACTION_RESPONSE_COMMENTS:
            const {
                postID: pstId,
                commentId: cmtId,
                replyCommentId,
                reaction: react,
            } = action.payload;

            return {
                ...state,
                listReactionsInResponseToComment: {
                    ...state.listReactionsInResponseToComment,
                    [pstId]: {
                        ...state.listReactionsInResponseToComment[pstId],
                        [cmtId]: {
                            ...state.listReactionsInResponseToComment[pstId]?.[cmtId],
                            [replyCommentId]: react,
                        },
                    },
                },
            };
        case ADD_NEW_POSTS:
            const { postData } = action.payload;
            return {
                ...state,
                listPostsData: [...state.listPostsData, postData],
            };
        case COMMENT_PRIVACY:
            const { privacy } = action.payload;

            if (state.savePrivacySelected === 'Anyone') {
                return {
                    ...state,

                    commentControlSelection: privacy,
                };
            } else {
                return {
                    ...state,

                    commentControlPrivateSelection: privacy,
                };
            }

        case POST_SETTINGS_PRIVACY:
            const { postPrivacy } = action.payload;
            return {
                ...state,
                postSettingsPrivacySelection: postPrivacy,
            };
        case SAVE_PRIVACY_SELECTED:
            const { privacySelected } = action.payload;
            return {
                ...state,
                savePrivacySelected: privacySelected,
            };
        default:
            return state;
    }
};
