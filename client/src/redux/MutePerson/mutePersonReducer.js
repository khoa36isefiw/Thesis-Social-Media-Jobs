// starred users
import { MUTE_PERSON } from '../actionConstant';

const initialState = { isMutePerson: false };

export const mutePersonReducer = (state = initialState, action) => {
    switch (action.type) {
        case MUTE_PERSON:
            return {
                ...state,
                isMutePerson: !state.isMutePerson,
            };

        default:
            return state;
    }
};
