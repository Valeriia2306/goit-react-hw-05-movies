import styled from '@emotion/styled';

const Article = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 30px;

  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #38ef7d, #11998e);
  background: linear-gradient(to top, #38ef7d, #11998e);
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  border-radius: 5px;
`;

const MovieTitle = styled.h2`
  font-size: 38px;
  line-height: 1.666;
  margin-bottom: 10px;
  color: orange;
`;
const SubTitle = styled.h3`
  font-size: 30px;
  line-height: 1.7;
  margin-bottom: 10px;
  color: orange;
`;

const Description = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 40px;
`;
export { Article, ImageWrapper, MovieTitle, Description, SubTitle, Wrapper };
