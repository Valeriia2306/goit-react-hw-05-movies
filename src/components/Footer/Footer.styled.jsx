import styled from '@emotion/styled';

const PageFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 20px;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 15px;
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #3f2b96,
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const Text = styled.p`
  color: black;
  font-size: 18px;
  line-height: 1.7;
`;

export { PageFooter, Text };
