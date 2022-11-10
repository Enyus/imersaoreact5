import React, { useState } from "react";
import validateInput from "./validateInput";

function useForm (formProps) {
    const [values, setValues] = useState(formProps.initialValues);
    const [errors, setErrors] = useState({title:"", url:"", exist: true})

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({
            ...values,
            [name]: value
        })
        validateInput(name, value) ? setErrors({ ...errors, [name]: ""}) : setErrors({ ...errors, [name]: "O input é inválido."})
    }

    const clearForm = () => {
        setValues({ title: "", url: "" })
        setErrors({ title:"", url:"", exist: true })
    }

    return {
        values,
        errors,
        handleChange,
        clearForm
    }
};

export default useForm;