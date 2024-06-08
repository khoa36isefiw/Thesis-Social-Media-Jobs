// starred users
import { MUTE_PERSON } from '../actionConstant';

const initialState = { isMutePerson: false, listMutedUser: [] };

export const mutePersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case MUTE_PERSON:
            const { userID } = action.payload;
            // check is userID exist in list?
            const isUserMuted = state.listMutedUser.includes(userID);
            return {
                ...state,
                // isMutePerson: !state.isMutePerson,
                listMutedUser: isUserMuted
                    ? state.listMutedUser.filter((id) => id !== userID)
                    : [...state.listMutedUser, userID],
            };

        default:
            return state;
    }
};
