import React, { useState } from "react";
import getYouTubeThumb from "../../assets/getYouTubeThumb";
import useForm from "../../assets/useForm";
import StyledModal from "./styles";

function RegisterVideo(props) {
  const [showModal, setShowModal] = useState(false);
  const formCadastro = useForm({
    initialValues: { title: "", url: "" },
  });

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
            console.log(formCadastro.values);
            setShowModal(false);
            formCadastro.clearForm();
          }}
          className="addform"
        >
          <div>
            <button
              type="button"
              onClick={(e) => {
                setShowModal(false); 
                formCadastro.clearForm();
            }}
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
            {formCadastro.errors.title == "" ? null : (
              <span className="form__error">{formCadastro.errors.title}</span>
            )}

            <input
              type="text"
              placeholder="URL"
              name="url"
              className="form__input"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            {formCadastro.errors.url == "" ? null : (
              <span className="form__error">{formCadastro.errors.url}</span>
            )}

            {!formCadastro.errors.exist.url ? <img src={getYouTubeThumb(formCadastro.values.url)} className="thumb__preview" /> : null }

            <button
              type="submit"
              className="submitbutton"
              disabled={!(!formCadastro.errors.exist.title && !formCadastro.errors.exist.url)}
            >
              Cadastrar
            </button>
          </div>
        </form>
      )}
    </StyledModal>
  );
}

export default RegisterVideo;
