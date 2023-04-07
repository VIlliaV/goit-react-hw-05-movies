import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  .SearchForm-button {
    padding: 5px;
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid var(--primary);
    border-radius: 3px;
    color: var(--button);
    background-color: var(--primary);
    box-shadow: 1px 1px 1px var(--shadow);

    &:active {
      color: var(--shadow);
    }
  }

  .SearchForm-input {
    width: 200px;
    font: inherit;
    font-size: 20px;
    border: 1px solid var(--primary);
    border-radius: 5px;
    box-shadow: 1px 1px 1px var(--second);
    padding-left: 4px;
    padding-right: 4px;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
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
