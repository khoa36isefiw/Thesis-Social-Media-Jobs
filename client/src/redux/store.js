// store.js
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { sendReducer } from './ButtonSendMessage/sendReducer';

const rootReducer = combineReducers({
    buttonSendMessage: sendReducer,
});

const store = createStore(rootReducer);

export default store;
