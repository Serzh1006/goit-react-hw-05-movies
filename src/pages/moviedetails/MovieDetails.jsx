import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import MovieDetailsInfo from 'components/movieDetails/MovieDetailsInfo';
import { fetchDetailsFilm } from 'services/fetchDetailsFilm';
import css from './moviedetails.module.css';

const MovieDetails = () => {
  const [dataObjAboutFilm, setDataObjAboutFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const detailsFilm = async () => {
        const response = await fetchDetailsFilm(Number(movieId));
        if (!response) {
          return;
        }

        const {
          original_title,
          poster_path,
          overview,
          genres,
          release_date,
          title,
          vote_average,
        } = response.data;

        setDataObjAboutFilm({
          original_title,
          poster_path,
          overview,
          genres,
          release_date,
          title,
          vote_average,
        });
      };
      detailsFilm();
    } catch (error) {
      alert(error.message);
    }
  }, [movieId]);

  return (
    <>
      <Link className={css.goback} to={backLink.current}>
        {'<-'} Go Back
      </Link>
      {Object.keys(dataObjAboutFilm).length > 0 && (
        <MovieDetailsInfo infoAboutFilm={dataObjAboutFilm} />
      )}
      <Suspense
        fallback={<div className={css.loadInfo}>Loading information...</div>}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
