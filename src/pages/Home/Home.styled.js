import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  padding: 15px;

  & h1 {
    margin-bottom: 10px;
  }

  & .list {
    display: flex;

    align-items: center;
    padding-left: 25px;
    margin-bottom: 5px;
    & :hover {
      color: var(--second);
      padding: 5px;
      background-color: var(--button);
      border: 1px solid var(--second);
      border-radius: 5px;
    }

    & span {
      display: block;
      width: 10px;
      height: 5px;
      background-color: var(--second);
      border-radius: 50%;
    }
    & .link {
      padding: 5px;

      color: var(--primary);

      &:active {
        color: var(--second);
      }
      &:visited {
        color: var(--second);
      }
    }
  }
`;
