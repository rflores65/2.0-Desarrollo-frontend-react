import { CLEAN_NAME_MODULE, SET_FORM_DATA } from './FormTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }

        case CLEAN_NAME_MODULE: {
            return {
                ...state,
                formData: {

                    username: '',
                    email: '',
                    password: '',
                }
            }
        }
        default:
            return state;
    }
};

export default formReducer;