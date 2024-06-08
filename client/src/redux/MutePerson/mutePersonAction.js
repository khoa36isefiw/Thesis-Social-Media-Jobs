// define actions
import { MUTE_PERSON, REMOVE_STAR } from '../actionConstant';

export const mutePersonAction = (userID) => ({
    type: MUTE_PERSON,
    payload: { userID },
});

export const removeStar = () => ({
    type: REMOVE_STAR,
});
