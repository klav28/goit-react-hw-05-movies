import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header className="w-screen rounded-sm p-3 shadow-lg">
        <Container>
          <nav>
            <StyledLink to="/" className="ml-5 pr-5 text-3xl" end>
              Home
            </StyledLink>
            <StyledLink to="/movies" className="text-3xl">
              Movies
            </StyledLink>
          </nav>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
