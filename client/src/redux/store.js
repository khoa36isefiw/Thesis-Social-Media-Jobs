// store.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { sendReducer } from './ButtonSendMessage/sendReducer';
import { highlightPersonReducer } from './ImportantPerson/highlightPersonReducer';
import { showMessageReducer } from './ShowMesssage/showMessageReducer';

const rootReducer = combineReducers({
    buttonSendMessage: sendReducer,
    // starred users
    importantPerson: highlightPersonReducer,
    messages: showMessageReducer,
});

const store = createStore(rootReducer);

export default store;
