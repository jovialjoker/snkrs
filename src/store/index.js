import { combineReducers, createStore } from 'redux';
import { accountReducer } from './reducers/account';

const store = createStore(combineReducers({
    account: accountReducer,
}));

export default store;