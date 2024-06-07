// store.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { sendReducer } from './ButtonSendMessage/sendReducer';
import { highlightPersonReducer } from './ImportantPerson/highlightPersonReducer';
import { showMessageReducer } from './ShowMesssage/showMessageReducer';
import { isMessageRepliedReducer } from './ReplyMessage/replyMessageReducer';
import { mutePersonReducer } from './MutePerson/mutePersonReducer';
import { addChatMessageReducer } from './AddChatMessage/addChatMessageReducer';
const rootReducer = combineReducers({
    buttonSendMessage: sendReducer,
    // starred users
    importantPerson: highlightPersonReducer,
    mutePerson: mutePersonReducer,
    messages: showMessageReducer,
    replyMessage: isMessageRepliedReducer,
    startAMessage: addChatMessageReducer,
});

const store = createStore(rootReducer);

export default store;
