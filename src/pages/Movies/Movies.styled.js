import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

  & .link {
    color: var(--primary);
    &:active {
      color: var(--second);
    }
    &:visited {
      color: var(--second);
    }
  }
`;
