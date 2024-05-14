// define actions
import { DISABLE_ENTER_KEY, ENABLE_ENTER_KEY, SEND_BUTTON_CLICK } from '../actionConstant';

export const sendButtonClick = () => ({
    type: SEND_BUTTON_CLICK,
});

export const enableKeyEnter = () => ({
    type: ENABLE_ENTER_KEY,
});

export const disableKeyEnter = () => ({
    type: DISABLE_ENTER_KEY,
});
