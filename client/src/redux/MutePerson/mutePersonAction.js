// define actions
import { MUTE_PERSON, REMOVE_STAR } from '../actionConstant';

export const mutePersonAction = () => ({
    type: MUTE_PERSON,
});

export const removeStar = () => ({
    type: REMOVE_STAR,
});
