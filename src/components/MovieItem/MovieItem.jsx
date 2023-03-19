import { generatePath } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Image, MovieTitle, PopularMovieItem } from './MovieItem.styled';
import LinkLocation from 'components/Link/LinkLocation';
import path from 'Routs/path';

const { movieIDForLink } = path;

const MovieItem = ({ movie: { id, title, poster_path, original_name } }) => {
  return (
    <PopularMovieItem>
      <LinkLocation to={generatePath(movieIDForLink, { id })}>
        <Image
          alt={title}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://i.gifer.com/YIge.gif'
          }
          loading="lazy"
        />
        <MovieTitle>{title || original_name}</MovieTitle>
      </LinkLocation>
    </PopularMovieItem>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieItem;
