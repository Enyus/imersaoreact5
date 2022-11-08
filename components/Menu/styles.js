import styled from "styled-components";

const StyledMenu = styled.nav`
    padding: 10px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search__container {
        display: flex;
        align-items: center;
    }

    .search__input {
        background-color: #f9f9f9;
        border: 1px solid #E5E5E5;
        height: 40px;
        width: 361px;
        padding: 0 10px;
        color: #222222;
        font-size: 16px;
    }

    .search__button {
        height: 40px;
        width: 64px;
        border: 1px solid #E5E5E5;
        background-color: #F0F0F0;
        font-size: 16px;
        padding: 0;
    }

    .darkmode__switch {
        -webkit-appearance: none;
        width: 50px;
        height: 26px;
        cursor: pointer;
        background: #333333;
        border-radius: 25px;
        padding: 0 1px;
        display: flex;
        align-items: center;
    }

    .darkmode__switch::before {
        content: "🌙";
        font-size: 16px;
    }

    .darkmode__switch::after {
        content: "☀️";
        font-size: 16px;
    }

    .darkmode__switch::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: #FFFFFF;
    }
`;

export default StyledMenu;