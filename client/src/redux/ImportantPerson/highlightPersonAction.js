// define actions
import { HIGH_LIGHT_PERSON, REMOVE_STAR } from '../actionConstant';

export const highlightPersonAction = (userID) => ({
    type: HIGH_LIGHT_PERSON,
    payload: { userID },
});

export const removeStar = () => ({
    type: REMOVE_STAR,
});
