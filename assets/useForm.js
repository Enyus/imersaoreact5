import { useState } from "react";
import validateInput from "./validateInput";

function useForm(formProps) {
  const [values, setValues] = useState(formProps.initialValues);
  const [errors, setErrors] = useState({ title: "", url: "", exist: {title: true, url: true, playlist:true} });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    let message;

    switch (name) {
      case "title":
        message = "O título do vídeo deve ter entre 5 e 150 caracteres.";
        break;
      case "url":
        message = "A url do vídeo deve ter entre 11 e 150 caracteres. Para conseguir uma boa thumbnail, recomendamos o uso de um link de vídeo do YouTube.";
        break;
      case "playlist":
        message = "Selecione uma playlist.";
        break;
    }

    setValues({
      ...values,
      [name]: value,
    });

    validateInput(name, value)
      ? setErrors({ ...errors, exist: {...errors.exist, [name]: false}, [name]: "" })
      : setErrors({ ...errors, exist: {...errors.exist, [name]: true}, [name]: "O input é inválido. " + message });
  };

  const clearForm = () => {
    setValues({ title: "", url: "", playlist:"" });
    setErrors({ title: "", url: "", exist: {title: true, url: true, playlist:true} });
  };

  return {
    values,
    errors,
    handleChange,
    clearForm,
  };
}

export default useForm;
