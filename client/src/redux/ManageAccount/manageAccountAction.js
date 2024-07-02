import { SAVE_ACCOUNT_SIGNUP } from '../actionConstant';

export const saveAccountRegistered = (account) => ({
    type: SAVE_ACCOUNT_SIGNUP,
    payload: { account },
});
