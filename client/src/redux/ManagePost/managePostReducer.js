import {
    ADD_COMMENT,
    ADD_NEW_POSTS,
    COMMENT_PRIVACY,
    GET_REACTION_IN_COMMENT_ON_POST,
    GET_REACTION_ON_POST,
    POST_SETTINGS_PRIVACY,
    SAVE_PRIVACY_SELECTED,
} from '../actionConstant';

const initialState = {
    reactions: {},
    comments: {},
    commentReactions: {},
    listPostsData: [],
    commentControlSelection: 'Anyone', // include 2 cases: Anyone, connections only, no one || connections only, no one
    commentControlPrivateSelection: 'Connections only',
    postSettingsPrivacySelection: 'Anyone', // include: Anyone, Connections only
    savePrivacySelected: 'Anyone', // only 2 case: Anyone or Connections only
};

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
