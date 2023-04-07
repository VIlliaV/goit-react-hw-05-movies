import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
  padding: 15px;
  & .link {
    display: inline-block;
    padding: 5px;
    margin-bottom: 10px;
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

  & .movie_head {
    max-width: 1600px;
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }
  & .movie_head_img {
    min-width: 200px;
    min-height: 300px;
    & img {
      max-width: 200px;
    }
  }

  & .movie_head_about {
    padiing: 5px;
    & h1,
    h2,
    h3 {
    }
    & p {
      margin-bottom: 15px;
    }
    & ul {
      display: flex;
      gap: 10px;
    }
  }

  & .movie_additional {
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    border-bottom: 1px solid var(--primary);
    border-top: 1px solid var(--primary);
    margin-bottom: 15px;
  }

  & .link_additional {
    font-style: italic;
    text-decoration: underline;
    padding: 5px;
    color: var(--primary);
  }
`;
