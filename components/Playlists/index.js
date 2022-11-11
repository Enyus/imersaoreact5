import React, { useContext, useEffect, useState } from "react";
import StyledMain from "./styles";
import config from "../../config.json";
import { UserContext } from "../../pages/_app";

function Playlists({ searchValue, ...props }) {
  const { user } = useContext(UserContext);
  const [playLists, setPlayLists] = useState([]);
  // A constante 'playLists' é um array dos nomes propriedades do objeto que guarda as playlists com os vídeos

  useEffect(() => {

    const videosFromDB = async () => {
      const res = await fetch("/api/getVideos", {
        body: JSON.stringify({
          user: user.id,
          playlist_id: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();

      if (result.error) {
        console.log(result.error)
        return;
      }

      console.log(result.data);
    };

    videosFromDB();

    setPlayLists(Object.keys(config.playlists));
  }, []);

  return (
    <StyledMain>
      {playLists.map((playList) => {
        const videos = config.playlists[playList];
        // a constante videos representa a array de vídeos dentro da propriedade de nome playlist do objeto que contem todas as informações
        // Serão criadas arrays diferentes de 'videos' para cada item de playLists
        return (
          <section key={playList}>
            {/* para cada item de playLists, será criada uma sessão */}
            <h2 className="playlist__titulo">{playList}</h2>
            <div className="playlist__container">
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a
                      href={video.url}
                      key={index}
                      className="video__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={video.thumb}
                        alt={video.title}
                        className="video__thumb"
                      />
                      <h3 className="video__title">{video.title}</h3>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledMain>
  );
}

export default Playlists;
