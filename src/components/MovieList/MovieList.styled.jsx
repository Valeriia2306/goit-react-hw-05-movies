import styled from '@emotion/styled';

const PopularMovieList = styled.ul`
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e);

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-bottom: 50px;
`;
export { PopularMovieList };
