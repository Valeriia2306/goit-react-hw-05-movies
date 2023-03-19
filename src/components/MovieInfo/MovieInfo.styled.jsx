import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;

  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e);
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;

  color: black;
  font-size: 24px;
  line-height: 1.7;
  text-align: center;
`;

const InfoList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const InfoLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  width: 150px;
  height: 40px;

  color: black;
  border-radius: 6px;
`;

const Item = styled.li`
  transition: transform 100ms ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export { Wrapper, Title, InfoList, InfoLinkStyled, Item };
