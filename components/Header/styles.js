import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: ${ ({theme}) => theme.backgroundLevel1};
    .banner {
        width: 100%;
        height: 230px;
        object-fit: cover;
    }
`;

export default StyledHeader;