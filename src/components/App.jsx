import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/moviedetails/MovieDetails';
import Layout from './layout/Layout';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

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
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
