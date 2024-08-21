import {combineReducers} from 'redux';

//aca importamos todo los reducers
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
    default: defaultReducer
});

export default rootReducer;