import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  overflow-x: auto;
  width: 100%;
  height: 90%;
  margin-bottom: 8px;

  user-select: none;

  @media screen and (min-width: 768px) {
    overflow-x: ${props => (props.$length < 2 ? 'hidden' : 'scroll')};
  }

  @media screen and (min-width: 1280px) {
    overflow-x: ${props => (props.$length < 3 ? 'hidden' : 'scroll')};
  }
`;
