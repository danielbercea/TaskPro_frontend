import styled from 'styled-components';

export const CardM = styled.div`
  display: flex;
  background: ${props => props.theme.column.backgroundMain};
  color: ${props => props.theme.column.textMain};

  border-radius: 4px;

  overflow: hidden;
  position: relative;
  min-height: 154px;
  height: 154px;

  .card-priority-bar {
    width: 7px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const CardContnt = styled.div`
  flex-grow: 1;
  padding: 14px 24px;
  h4 {
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    margin-bottom: 4px;
    color: ${props => props.theme.column.textMain};
  }

  .card-description {
    font-family: 'Poppins';
    font-size: 12px;
    line-height: 16px;
    margin: 0;
    padding-bottom: 14px;
    color: ${props => props.theme.column.textSecondary};
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  top: 95px;
  width: 280px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.column.borderColor};
  padding-top: 14px;

  .card-info {
    display: flex;
    gap: 14px;
    width: 123px;
  }
  .card-priority,
  .card-deadline {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card-footer-text {
    font-size: 8px;
    line-height: 12px;
    color: ${props => props.theme.column.textSecondary};
  }
  .card-priority-div {
    display: flex;
    gap: 2px;
  }
  .card-priority-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .card-footer-data {
    font-size: 10px;
    line-height: 15px;
    color: ${props => props.theme.column.textMain};
  }
  .card-actions {
    display: flex;
    align-items: last baseline;
    gap: 8px;
  }

  .card-button {
    background: none;
    border: none;
    color: ${props => props.theme.column.icon};
    cursor: pointer;
    height: 16px;
  }

  .card-button:hover {
    scale: 1.2;
  }
`;
