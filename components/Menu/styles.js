import styled from "styled-components";

const StyledMenu = styled.nav`
  padding: 10px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase };
    }
  }

  .search__container {
    display: flex;
    align-items: center;
  }

  .search__input {
    background-color: ${({ theme }) => theme.backgroundBase};
    border: 1px solid ${({ theme }) => theme.borderBase};
    height: 40px;
    width: 361px;
    padding: 0 10px;
    color: #222222;
    font-size: 16px;
  }

  .search__button {
    height: 40px;
    width: 64px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    background-color: ${({ theme }) => theme.backgroundLevel2};
    font-size: 16px;
    padding: 0;
    cursor: pointer;
  }

  .search__button:hover {
    background-color: ${({ theme }) => theme.borderBase};
  }

  .darkmode__switch {
    -webkit-appearance: none;
    width: 50px;
    height: 26px;
    cursor: pointer;
    background: #333333;
    border-radius: 25px;
    padding: 0 2px;
    display: flex;
    align-items: center;
  }

  .darkmode__switch::before {
    content: "🌙";
    font-size: 16px;
    margin-bottom: 1px;
  }

  .darkmode__switch::after {
    content: "☀️";
    font-size: 16px;
    margin-bottom: 1px;
  }

  .darkmode__switch::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ffffff;
  }
`;

export default StyledMenu;
