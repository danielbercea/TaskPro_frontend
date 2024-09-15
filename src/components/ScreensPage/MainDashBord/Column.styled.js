import styled from 'styled-components';

export const Pillar = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .column-title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 14px;
    align-items: center;
    max-width: 400px;
    height: 56px;
    border-radius: 8px;
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 21px;
    background: ${props => props.theme.column.backgroundMain};
    color: ${props => props.theme.column.textMain};
  }
  .title-icons {
    display: flex;
    gap: 8px;
  }
  .title-icons > button {
    cursor: pointer;
    border: none;
    color: ${props => props.theme.column.icon};
    background-color: transparent;
  }
  .title-icons > button:hover {
    scale: 1.2;
  }
`;
