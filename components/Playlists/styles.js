import styled from "styled-components";

const StyledMain = styled.main`
  flex: 1;
  width: 100%;
  padding: 0 28px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase};

  .playlist__titulo {
    font-weight: bold;
    text-transform: capitalize;
    margin: 16px 0;
    color: ${({ theme }) => theme.textColorBase};
  }

  .playlist__container {
    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px, 1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .video__link {
    width: 210px;
    color: ${({ theme }) => theme.textColorBase};
    text-decoration: none;
    scroll-snap-align: start;
  }

  .video__thumb {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }

  .video__title {
    font-weight: unset;
    color: inherit;
    padding-top: 8px;
    padding-right: 24px;
  }
`;

export default StyledMain;
