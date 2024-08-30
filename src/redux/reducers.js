import {combineReducers} from 'redux';

//aca importamos todo los reducers
import defaultReducer from './default/defaultReducer';
import productReducer from './Product/productReducer';
import formReducer from './form/FormReducer'

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer
});

export default rootReducer;