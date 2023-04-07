import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  padding: 15px;

  & h1 {
    margin-bottom: 10px;
  }
  & .link {
    padding-left: 25px;
    margin-bottom: 5px;
    color: var(--primary);

    &:active {
      color: var(--second);
    }
    &:visited {
      color: var(--second);
    }
  }
  & span {
    display: inline;
    width: 10px;
    height: 10px;
    background-color: var(--second);
  }
`;
