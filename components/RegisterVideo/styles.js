import styled from "styled-components";

const StyledModal = styled.div`
  .addVideo__button {
    color: ${({ theme }) => theme.backgroundLevel1};
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 16px;
    bottom: 16px;
    border: none;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
  }

  .addform {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    & > div{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 600px;
        background-color: ${({ theme }) => theme.backgroundLevel1};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 12px;
    }
  }

  .closebutton {
    border: none;
    background: none;
    cursor: pointer;
    align-self: flex-end;
    color: ${({ theme }) => theme.textColorBase};
  }

  .form__input {
    margin-top: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.backgroundBase};
    border: 1px solid ${({ theme }) => theme.borderBase};
    border-radius: 3px;
    color: ${({ theme }) => theme.textColorBase};
  }

  .submitbutton {
    margin-top: 20px;
    padding: 10px;
    color: ${({ theme }) => theme.textColorBase};
    font-weight: bold;
    background-color: red;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .submitbutton:disabled {
    opacity: 0.5;
  }

  .form__error {
    color: red;
    margin-top: 5px;
  }
`;

export default StyledModal;
