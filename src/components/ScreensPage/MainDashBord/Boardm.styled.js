import styled from 'styled-components';

export const ColumnsAndButton = styled.div`
  display: flex;
  gap: 18px;
  // overflow-x: auto;
`;
export const AddColumnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 334px;
  height: 56px;
  border: none;
  background: ${props => props.theme.addColumnButton.background};
  border-radius: 10px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.addColumnButton.color};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const ButtonPls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.addColumnButton.plusBackground};
  margin-right: 8px;
  padding: 7px;
`;
export const IconPls = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.addColumnButton.plusColor};
`;
