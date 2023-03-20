import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';
import PropTypes from 'prop-types';

import MovieLinkStyle from './LinkLocation.styled';

const LinkLocation = prop => {
  const location = useLocation();
  const { children } = prop;
  return (
    <MovieLinkStyle {...prop} state={{ from: location }}>
      {children}
    </MovieLinkStyle>
  );
};

LinkLocation.propTypes = {
  to: PropTypes.string,
};

export default LinkLocation;
