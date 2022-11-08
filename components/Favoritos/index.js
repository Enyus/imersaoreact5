import React from "react";
import StyledFooter from "./styles";

function Favoritos (props) {
    return(
        <StyledFooter>
            <h3 className="favoritos__title">AluraTubes Favoritos</h3>
            <div className="favoritos__container">
                <a className="favoritos__link" href="#">
                    <img src="https://github.com/peas.png" alt="favorito" className="favoritos__img" />
                    <p className="favoritos__name">@peas</p>
                </a>

                <a className="favoritos__link" href="#">
                    <img src="https://github.com/omariosouto.png" alt="favorito" className="favoritos__img" />
                    <p className="favoritos__name">@omariosouto</p>
                </a>
            </div>
        </StyledFooter>
    )
};

export default Favoritos;