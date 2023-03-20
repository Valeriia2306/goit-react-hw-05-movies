import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonToHomePage = styled(Link)`
  position: absolute;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  top: 100px;
  padding: 8px;

  font-size: 20px;
  line-height: 1.666;
  background: #11998e;
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e);
  color: white;
  border-radius: 5px;
  text-decoration: none;

  transition: background-color 100ms ease-in, transform 100ms ease-in,
    color 100ms ease-in;

  &:hover {
    background: #800080; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffc0cb,
      #800080
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffc0cb,
      #800080
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #212121;
    transform: scale(1.05);
  }
`;

export { ButtonToHomePage };
