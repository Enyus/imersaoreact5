import Link from "next/link";
import React from "react";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Logo from "./components/Logo";
import StyledMenu from "./styles";

function Menu ({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (
        <StyledMenu>
            <Link href='/'>
                <Logo />
            </Link>

            <form className="search__container" onSubmit={(e) => {e.preventDefault()}}>
                <input type='text' className="search__input" placeholder="Video" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
                <button type="submit" className="search__button">🔎</button>
            </form>

            <DarkModeSwitch />
        </StyledMenu>
    )
};

export default Menu;