import { CLEAN_NAME_MODULE, SET_FORM_DATA } from './FormTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}
export const cleanFormData = () => {
    return {
        type: CLEAN_NAME_MODULE,
    }
}
