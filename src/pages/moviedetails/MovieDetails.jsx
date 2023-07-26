import { useEffect, useState, useRef, Suspense } from 'react';
import { format } from 'date-fns';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchDetailsFilm } from 'services/fetchDetailsFilm';
import css from './moviedetails.module.css';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genre, setGenre] = useState([]);
  const [imgsrc, setImgsrc] = useState('');
  const [altimg, setAltImg] = useState('');
  const [year, setYear] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const detailsFilm = async () => {
        setIsLoading(true);
        const responce = await fetchDetailsFilm(Number(movieId));
        if (responce.status === 200) {
          const dataObj = responce.data;
          setIsLoading(false);
          setTitle(dataObj.original_title);
          dataObj.poster_path === null
            ? setImgsrc(
                'https://thumbs.dreamstime.com/z/ardoise-de-film-et-bobine-de-film-sur-le-bois-36502412.jpg?w=992'
              )
            : setImgsrc(
                `https://image.tmdb.org/t/p/w500${dataObj.poster_path}`
              );

          setOverview(dataObj.overview);
          setGenre(dataObj.genres);
          const newYearFormat = format(new Date(dataObj.release_date), 'yyyy');
          setYear(newYearFormat);
          setAltImg(dataObj.title);
          const score = (dataObj.vote_average * 10).toFixed();
          setUserScore(score);
        }
      };
      detailsFilm();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <>
      <Link className={css.goback} to={backLink.current}>
        {'<-'} Go Back
      </Link>
      {!isLoading && (
        <>
          <div className={css.filmInfo}>
            <img src={imgsrc} alt={altimg} width="300px" />

            <div className={css.content}>
              <h2 className={css.titleFilm}>
                {title} ({year})
              </h2>
              <p className={css.scoreFilm}>User Score: {userScore}%</p>
              <h3 className={css.overview}>Overview</h3>
              <p className={css.overviewText}>{overview}</p>
              <h3 className={css.genre}>Genres</h3>
              <ul className={css.genreList}>
                {genre.map(objGenre => {
                  return (
                    <li key={objGenre.id}>
                      <p>{objGenre.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={css.addInfo}>
            <h4 className={css.addInfoTitle}>Additional information</h4>
            <ul className={css.addInfoList}>
              <li>
                <Link className={css.addInfoItem} to={'cast'}>
                  Cast
                </Link>
              </li>
              <li>
                <Link className={css.addInfoItem} to={'reviews'}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading information...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
