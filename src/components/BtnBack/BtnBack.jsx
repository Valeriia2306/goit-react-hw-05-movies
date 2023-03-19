import { BiArrowBack } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { ButtonToHomePage } from './BtnBack.styled';
const BackButton = ({ to, children }) => {
  return (
    <ButtonToHomePage to={to}>
      <BiArrowBack />
      <p>{children}</p>
    </ButtonToHomePage>
  );
};

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
