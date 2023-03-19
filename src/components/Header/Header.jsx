import { BiHomeHeart, BiFilm } from 'react-icons/bi';
import paths from 'Routs/path';
import {
  HeaderNav,
  Navigation,
  NavigationList,
  NavLinkStyled,
} from './Header.styled';
const { home, movies } = paths;

const Header = () => {
  return (
    <HeaderNav>
      <Navigation>
        <NavigationList>
          <li>
            <NavLinkStyled to={home}>
              <BiHomeHeart />
              <p> Home</p>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={movies}>
              <BiFilm />
              <p> Movies</p>
            </NavLinkStyled>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderNav>
  );
};

export default Header;
