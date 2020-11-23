import {combineReducers} from 'redux';

import dateReducer from './dateReducer';
import toggleModalReducer from './toggleModalReducer';

export default combineReducers({
    dateReducer,
    toggleModalReducer
});