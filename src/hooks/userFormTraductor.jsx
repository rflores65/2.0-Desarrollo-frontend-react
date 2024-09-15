import { useState } from "react";

const useFormTraductor = (initialValues) =>{
    const [values, setValues] = useState(initialValues);
    const handleChange = (event, index)=>{
        const {name, value} = event.target;
        const updateValues = [...values]
        updateValues[index]={
            ...updateValues[index],
            [name]: value
        }
        setValues(updateValues)
    }
    const addValue = (newValue) =>{
        setValues([...values, newValue])
    }
    const removeValue = (index) => {
        const updatedValues = values.filter((_, i) => i !== index);
        setEntries(updatedValues);
    };

    const cleanData = () => {
        setValues([]);
    };

    return [values, handleChange, addValue, removeValue, cleanData];
    
}

export default useFormTraductor;