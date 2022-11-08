import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;

  .playlist__titulo {
    font-weight: bold;
    text-transform: capitalize;
    margin: 16px 0;
  }

  .playlist__container {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    flex-flow: wrap;
  }

  .video__link {
    width: 210px;
    color: unset;
    text-decoration: none;
  }

  .video__thumb {
    width: 100%;
  }

  .video__title {
    font-weight: unset;
  }

`;

export default StyledMain;
