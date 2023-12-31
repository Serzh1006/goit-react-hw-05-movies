import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';

const Home = lazy(() => import('../pages/home/Home'));
const MovieDetails = lazy(() => import('../pages/moviedetails/MovieDetails'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/Reviews'));
const Movies = lazy(() => import('../pages/movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};

export default App;
