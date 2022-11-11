import React, { useContext, useEffect, useState } from "react";
import StyledMain from "./styles";
import config from "../../config.json";
import { UserContext } from "../../pages/_app";

function Playlists({ searchValue, ...props }) {
  const { user } = useContext(UserContext);
  const [playLists, setPlayLists] = useState([]);
  // A constante 'playLists' é um array dos nomes propriedades do objeto que guarda as playlists com os vídeos
  const [videosObject, setVideosObject] = useState({})
  // criei um objeto para que seja possível o carregamento a partir do supabase ou de config.json

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
        console.log(result.error);
        setPlayLists(Object.keys(config.playlists));
        setVideosObject(config.playlists)
        return;
      }

      let playListsDB = {};
      result.data.map((playlist, index) => {
        playListsDB = {
          ...playListsDB,
          [result.data[index].playlist]: result.data[index].videos,
        };
      });

      // console.log(playListsDB);
      // console.log(config.playlists)
      setPlayLists(Object.keys(playListsDB));
      setVideosObject(playListsDB);
    };

    videosFromDB();
  }, []);

  return (
    <StyledMain>
      {playLists.length > 0 ? (
        playLists.map((playList) => {
          const videos = videosObject[playList];
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
        })
      ) : (
        <p>Carregando...</p>
      )}
    </StyledMain>
  );
}

export default Playlists;
