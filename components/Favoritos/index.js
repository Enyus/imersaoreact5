/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState, useEffect } from "react";
import StyledFooter from "./styles";
import { UserContext } from "../../pages/_app";

function Favoritos(props) {
  const { user } = useContext(UserContext);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosFromDB = async () => {
      const res = await fetch("/api/getFavoritos", {
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
        setFavoritos(["peas", "omariosouto"])
        return;
      }

      let favoritosDB = [];
      result.data.map((favorito) => {
        favoritosDB.push(favorito.github);
      });

      setFavoritos(favoritosDB);
    };

    favoritosFromDB();
  }, []);

  return (
    <StyledFooter>
      <h3 className="favoritos__title">AluraTubes Favoritos</h3>
      <div className="favoritos__container">
        {favoritos.length > 0
          ? favoritos.map((favorito) => {
              return (<a className="favoritos__link" href={`https://github.com/${favorito}`} target="_blank" rel="noreferrer" key={favorito}>
                <img
                  src={`https://github.com/${favorito}.png`}
                  alt="favorito"
                  className="favoritos__img"
                />
                <p className="favoritos__name">@{favorito}</p>
              </a>)
            })
          : null}
      </div>
    </StyledFooter>
  );
}

export default Favoritos;
