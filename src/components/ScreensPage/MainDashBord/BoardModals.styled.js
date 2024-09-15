import styled from 'styled-components';

export const ModalsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalM = styled.div`
  &.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: ${props => props.theme.modal.backgroundMain};
    color: #ffff;
    border: 1px solid ${props => props.theme.modal.border};
    border-radius: 8px;
    padding: 24px;
    width: 335px;

    @media screen and (min-width: 768px) {
      width: 350px;
    }
    &.modalAddColumn {
      height: 221px;
    }

    &.modalAddCard {
      height: 522px;
    }
  }
`;
export const CloseModalBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  stroke: ${props => props.theme.modal.iconClose};
  background: none;
  border: none;
  font-size: 24px;
  color: ${props => props.theme.modal.iconClose};
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.8;
    scale: 1.2;
  }
`;
export const ModalTitle = styled.p`
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.36px;
  text-align: left;
  margin-bottom: 10px;
  color: ${props => props.theme.modal.textMain};
`;
export const TitleInput = styled.input`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  margin-top: 14px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const Dline = styled.div`
  margin-top: 12px;
  font-size: 12px;
  //   color: #ffffff80;
  color: ${props => props.theme.modal.buttonBackground};
  width: 127px;
  label {
    display: block;
  }

  input {
    width: 100%;
    margin-top: 5px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: #bedbb0;
  }
`;

export const DotDiv = styled.div`
  margin-top: 24px;
  font-size: 12px;
  label {
    display: block;
  }
  div {
    display: flex;
    gap: 8px;
    margin-top: 5px;
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.modal.textSecondary};
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export const Dot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  cursor: pointer;
  &.blue {
    background-color: #8fa1d0;
  }
  &.pink {
    background-color: #e09cb5;
  }
  &.green {
    background-color: #bedbb0;
  }
  &.black {
    background-color: rgb(102, 98, 98);
  }
  &.selected {
    border: 3px solid darkgray;
    scale: 1.2;
  }
`;

export const ModalSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.$margintop || '40px'};
  padding: 14px;
  width: 100%;
  height: 49px;
  border: none;
  background: ${props => props.theme.modal.buttonBackground};
  border-radius: 10px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.modal.buttonText};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const PlusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.modal.plusBackground};
  margin-right: 8px;
  padding: 7px;
`;
export const PlsIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.modal.plusColor};
`;
