import React from "react";
import StyledUser from "./styles";

function User({usuario}) {
    return (
        <StyledUser>
            <img src={`https://github.com/${usuario.github}.png`} alt={`Imagem de ${usuario.name}`} className="imagem__usuario" />

            <div className="dados__usuario">
                <h2 className="nome__usuario">{usuario.name}</h2>
                <p className="cargo__usuario">{usuario.job}</p>
            </div>
        </StyledUser>
    )
};

export default User;