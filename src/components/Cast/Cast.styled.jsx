import styled from '@emotion/styled';

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e);
`;
const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;

  background-color: orange;
  padding-bottom: 10px;
  border-radius: 5px;
`;
const CastImages = styled.img`
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Name = styled.p`
  text-align: center;
  color: #212121;
`;

export { CastImages, CastItem, CastList, Name };
