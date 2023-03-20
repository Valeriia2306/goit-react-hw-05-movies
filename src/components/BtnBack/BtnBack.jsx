import { BiArrowBack } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import { ButtonToHomePage } from './BtnBack.styled';

const BackButton = ({ children }) => {
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/');

  return (
    <ButtonToHomePage to={goBackLink.current}>
      <BiArrowBack />
      <p>{children}</p>
    </ButtonToHomePage>
  );
};

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
