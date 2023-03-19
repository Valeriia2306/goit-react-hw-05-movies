import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import paths from 'Routs/path';
import Layout from 'Layouts/Layout';

const Home = lazy(() => import('Pages/HomePage'));
const Movies = lazy(() => import('Pages/MoviesPage'));
const MovieDetails = lazy(() => import('Pages/MovieDetailsPage'));
const NotFound = lazy(() => import('Pages/NotFoundPage'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

const { home, movies, movieID, cast, reviews, error } = paths;
export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={movieID} element={<MovieDetails />}>
          <Route path={cast} element={<Cast />} />
          <Route path={reviews} element={<Reviews />} />
        </Route>
        <Route path={error} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
