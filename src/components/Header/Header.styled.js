import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  font-size: 24px;
  text-shadow: 1px 1px 2px var(--shadow);
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--primary);
  box-shadow: 1px 1px 1px var(--second);
  & .list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;

export const NavStyle = styled(NavLink)`
  color: var(--primary);
  &.active {
    color: var(--second);
  }
`;
