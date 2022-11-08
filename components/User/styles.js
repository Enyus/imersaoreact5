import styled from "styled-components";

const StyledUser = styled.section`
    display: flex;
    align-items: center;
    padding: 10px 28px;

    .imagem__usuario {
        border-radius: 50%;
        height: 80px;
        width: 80px;
    }

    .dados__usuario {
        margin-left: 11px;
    }

    .nome__usuario {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 1px;
    }

    .cargo__usuario {
        color: #666666;
        font-weight: bold;
    }
`;

export default StyledUser;