import styled from 'styled-components';

export const Container = styled.div`
  & .movie_head {
    max-width: 1600px;
    display: flex;
    gap: 20px;
  }
  & .movie_head_img {
    min-width: 200px;
    min-height: 300px;
    & img {
      max-width: 200px;
    }
  }
`;
