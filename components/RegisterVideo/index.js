import React, { useContext, useEffect, useState } from "react";
import getYouTubeThumb from "../../assets/getYouTubeThumb";
import useForm from "../../assets/useForm";
import StyledModal from "./styles";
import {UserContext} from '../../pages/_app';
import config from '../../config.json';

function RegisterVideo(props) {
  const { user } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlayLists] = useState([]);
  const formCadastro = useForm({
    initialValues: { title: "", url: "" },
  });

  useEffect( () => {
    const playlistsFromDB = async () => {
      const res = await fetch("/api/getPlaylists", {
        body: JSON.stringify({
          user: user.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();

      if (result.error) {
        console.log(result.error);
        setPlayLists(Object.keys(config.playlists));
        return;
      }

      let playlistsDB = [];
      result.data.map((playlist) => {
        playlistsDB.push(playlist.playlist);
      });

      // console.log(playlistsDB);
      setPlayLists(playlistsDB);
    };

    playlistsFromDB();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formCadastro.values);



    setShowModal(false);
    formCadastro.clearForm();
  }

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
          onSubmit={handleSubmit}
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

            <select name="playlist" className="playlist__select">
              <option selected disabled defaultValue={''}>Playlist</option>
              {playlists.length > 0
                ? playlists.map( (playlist) => <option key={playlist}>{playlist}</option> )
                : <option>Carregando...</option>}
            </select>

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
