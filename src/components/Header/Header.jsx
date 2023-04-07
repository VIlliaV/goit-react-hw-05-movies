// import { NavLink } from 'react-router-dom';
import { Container, NavStyle } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <ul className="list">
        <li>
          <NavStyle to="/">Home</NavStyle>
        </li>
        <li>
          <NavStyle to="movies">Movies</NavStyle>
        </li>
      </ul>
    </Container>
  );
};
