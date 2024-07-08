import { PHOTO_VIEWING_RIGHTS } from '../actionConstant';

export const setViewingRights = (viewing) => ({
    type: PHOTO_VIEWING_RIGHTS,
    payload: { viewing },
});
