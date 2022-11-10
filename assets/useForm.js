import React, { useState } from "react";

function useForm (formProps) {
    const [values, setValues] = useState(formProps.initialValues);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setValues({
            ...values,
            [name]: value
        })
    }

    const clearForm = () => {
        setValues({ title: "", url: "" })
    }

    return {
        values,
        handleChange,
        clearForm
    }
};

export default useForm;