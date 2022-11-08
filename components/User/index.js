import React from "react";
import StyledUser from "./styles";
import config from "../../config.json";

function User(props) {
    return (
        <StyledUser>
            <img src={`https://github.com/${config.github}.png`} alt={`Imagem de ${config.name}`} className="imagem__usuario" />

            <div className="dados__usuario">
                <h2 className="nome__usuario">{config.name}</h2>
                <p className="cargo__usuario">{config.job}</p>
            </div>
        </StyledUser>
    )
};

export default User;