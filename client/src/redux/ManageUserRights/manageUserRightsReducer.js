import { PHOTO_VIEWING_RIGHTS } from '../actionConstant';

const initialState = {
    setViewingRights: 'All Aikotoba members',
};

export const manageUserRightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTO_VIEWING_RIGHTS:
            const { viewing } = action.payload;
            return {
                ...state,
                setViewingRights: viewing,
            };

        default:
            return state;
    }
};
