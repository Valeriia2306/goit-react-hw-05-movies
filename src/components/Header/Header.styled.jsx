import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderNav = styled.header`
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin-bottom: 85px;
`;

const Navigation = styled.nav`
  padding: 20px 40px;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 25px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.666;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  &.active {
    color: orange;
  }

  transition: transform 80ms ease-in, background-color 80ms ease-in,
    color 80ms ease-in;
  &:hover {
    transform: scale(1.1);
    background-color: orange;
    color: black;
  }
`;

export { HeaderNav, NavigationList, NavLinkStyled, Navigation };
