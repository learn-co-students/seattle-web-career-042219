import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import bowieReducer from './bowieReducer';

export default combineReducers({
    headerReducer,
    bowieReducer
})