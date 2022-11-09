import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 10px 28px;
    background-color: ${ ({theme}) => theme.backgroundBase};

    .favoritos__title {
        font-weight: bold;
        margin: 16px 0;
        color: ${ ({theme}) => theme.textColorBase};
    }

    .favoritos__container {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }

    .favoritos__link {
        color: ${ ({theme}) => theme.textColorBase};
        text-decoration: none;
    }

    .favoritos__img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .favoritos__name {
        text-align: center;
    }
`;

export default StyledFooter;