import ButtonToHome from 'components/BtnBack/BtnBack';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { MovieLoader } from 'services/ContentLoader';
import { MovieInfoById } from 'Api/Api';
import MovieDetails from 'components/MoviesDetails/MoviesDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    setStatus('loading');

    MovieInfoById(id)
      .then(({ data }) => setMovie(data))
      .catch(error => {
        console.log(error.message);
        setStatus('not found');
      })
      .finally(() => setStatus('fulfilled'));
  }, [id]);

  if (status === 'loading') {
    return MovieLoader();
  }

  if (status === 'fulfilled') {
    return (
      <>
        <ButtonToHome to={'/'}>Go to back</ButtonToHome>
        <MovieDetails movie={movie} />
        <Outlet />
      </>
    );
  }
};

export default MovieDetailsPage;
