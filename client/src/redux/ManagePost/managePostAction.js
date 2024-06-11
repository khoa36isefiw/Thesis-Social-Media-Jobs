import { GET_REACTION_ON_POST } from '../actionConstant';

export const getReactionOnPost = (reaction) => ({
    type: GET_REACTION_ON_POST,
    payload: { reaction },
});
