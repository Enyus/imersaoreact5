import React, { useState } from "react";
import StyledModal from "./styles";
import useForm from "../../assets/useForm";

function RegisterVideo(props) {
  const [showModal, setShowModal] = useState(true);
  const formCadastro = useForm({
    initialValues: { title: "", url: "" }
  })

  return (
    <StyledModal>
      <button
        className="addVideo__button"
        type="button"
        onClick={(e) => setShowModal(true)}
      >
        +
      </button>

      {showModal && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formCadastro.values)
            setShowModal(false);
            formCadastro.clearForm();
          }}
          className="addform"
        >
          <div>
            <button
              type="button"
              onClick={(e) => setShowModal(false)}
              className="closebutton"
            >
              X
            </button>

            <input
              type="text"
              placeholder="Video Title"
              name="title"
              className="form__input"
              value={formCadastro.values.title}
              onChange={formCadastro.handleChange}
            />

            <input
              type="text"
              placeholder="URL"
              name="url"
              className="form__input"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <button type="submit" className="submitbutton">
              Cadastrar
            </button>
          </div>
        </form>
      )}
    </StyledModal>
  );
}

export default RegisterVideo;
