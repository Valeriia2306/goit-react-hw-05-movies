import paths from 'Routs/path';
import {
  Wrapper,
  Title,
  InfoList,
  InfoLinkStyled,
  Item,
} from './MovieInfo.styled';

const { cast, reviews } = paths;

const MovieInfo = () => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <InfoList>
        <Item>
          <InfoLinkStyled to={cast} replace>
            Cast
          </InfoLinkStyled>
        </Item>
        <Item>
          <InfoLinkStyled to={reviews} replace>
            Reviews
          </InfoLinkStyled>
        </Item>
      </InfoList>
    </Wrapper>
  );
};
export default MovieInfo;
