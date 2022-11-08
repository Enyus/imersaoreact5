import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 10px 28px;

    .favoritos__title {
        font-weight: bold;
        margin: 16px 0;
    }

    .favoritos__container {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
    }

    .favoritos__link {
        color: unset;
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