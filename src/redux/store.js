import { createStore } from "redux";
//aqui importamos nuestros reducer
import rootReducer from "./reducers";


const store = createStore(rootReducer);

export default store;