// define actions
import { HIGH_LIGHT_PERSON, REMOVE_STAR } from '../actionConstant';

export const highlightPersonAction = () => ({
    type: HIGH_LIGHT_PERSON,
});

export const removeStar = () => ({
    type: REMOVE_STAR,
});
