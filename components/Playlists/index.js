import React from "react";
import StyledMain from "./styles";
import config from "../../config.json";

function Playlists({ searchValue, ...props }) {
  const playLists = Object.keys(config.playlists);

  return (
    <StyledMain>
      {playLists.map((playList) => {
        const videos = config.playlists[playList];
        return (
          <section key={playList}>
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
