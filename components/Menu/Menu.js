import Image from "next/image";
import React from "react";
import StyledMenu from "./styles";

function Menu (props) {

    const handleDarkmodeSwitch = (e) => {
        const darkmodeSwitch = document.getElementById("darkmode");
        if (darkmodeSwitch.value == 1) {
            darkmodeSwitch.value = 0;
        } else {
            darkmodeSwitch.value = 1;
        }
        console.log(darkmodeSwitch.value);
    }

    return (
        <StyledMenu>
            <Image src='/logo.svg' alt="Logo da AluraTube" width={127} height={25} />

            <form className="search__container" onSubmit={(e) => {e.preventDefault()}}>
                <input type='text' className="search__input" placeholder="Video" />
                <button type="submit" className="search__button">🔎</button>
            </form>

            <input type="range" min="0" max="1" step="1" className="darkmode__switch" id="darkmode" onClick={handleDarkmodeSwitch} />
        </StyledMenu>
    )
};

export default Menu;