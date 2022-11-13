import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import getYouTubeThumb from "../../assets/getYouTubeThumb";
import useForm from "../../assets/useForm";
import config from "../../config.json";
import { UserContext } from "../../pages/_app";
import StyledModal from "./styles";

function RegisterVideo(props) {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [playlists, setPlayLists] = useState([]);
  const [adicionandoVideo, setAdicionandoVideo] = useState(false)
  const formCadastro = useForm({
    initialValues: { title: "", url: "", playlist: "" },
  });
  const router = useRouter();

  useEffect(() => {
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

      // console.log(result)
      setPlayLists(result.data);
    };

    playlistsFromDB();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formCadastro.values);
    setAdicionandoVideo(true);

    const res = await fetch("/api/addVideo", {
      body: JSON.stringify({
        title: formCadastro.values.title,
        url: formCadastro.values.url,
        thumb: getYouTubeThumb(formCadastro.values.url),
        playlist_id: Number(formCadastro.values.playlist),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result)

    if (result.error) {
      console.log(result.error);
    }

    setAdicionandoVideo(false);
    setShowModal(false);
    formCadastro.clearForm();
    router.reload();
  };

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
        <form onSubmit={handleSubmit} className="addform">
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

            {!formCadastro.errors.exist.url ? (
              <img
                src={getYouTubeThumb(formCadastro.values.url)}
                className="thumb__preview"
              />
            ) : null}

            <select
              name="playlist"
              className="playlist__select"
              value={formCadastro.values.playlist}
              onChange={formCadastro.handleChange}
            >
              <option disabled value="">
                Selecione uma Playlist
              </option>
              {playlists.length > 0 ? (
                playlists.map((playlist) => (
                  <option key={playlist.id} value={`${playlist.id}`}>
                    {playlist.playlist}
                  </option>
                ))
              ) : (
                <option>Carregando...</option>
              )}
            </select>
            {formCadastro.errors.playlist == "" ? null : (
              <span className="form__error">{formCadastro.errors.playlist}</span>
            )}

            <button
              type="submit"
              className="submitbutton"
              disabled={
                !(
                  !formCadastro.errors.exist.title &&
                  !formCadastro.errors.exist.url &&
                  !formCadastro.errors.exist.playlist
                )
              }
            >
              {adicionandoVideo ? "Adicionando Vídeo..." : "Cadastrar"}
            </button>
          </div>
        </form>
      )}
    </StyledModal>
  );
}

export default RegisterVideo;
