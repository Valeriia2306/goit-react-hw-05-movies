import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieLinkStyle from './LinkLocation.styled';

const LinkLocation = prop => {
  const { pathname } = useLocation();
  const { children } = prop;
  return (
    <MovieLinkStyle {...prop} state={{ prevPage: pathname }}>
      {children}
    </MovieLinkStyle>
  );
};

LinkLocation.propTypes = {
  to: PropTypes.string,
};

export default LinkLocation;
