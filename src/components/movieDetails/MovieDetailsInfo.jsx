import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import css from './moviedetails.module.css';

const MovieDetailsInfo = ({ infoAboutFilm }) => {
  let {
    original_title,
    poster_path,
    overview,
    genres,
    release_date,
    title,
    vote_average,
  } = infoAboutFilm;

  if (!release_date) {
    release_date = 'No Date';
  } else {
    release_date = format(new Date(release_date), 'yyyy');
  }
  if (!original_title) {
    original_title = 'No Title';
  }
  if (!overview) {
    overview = 'No Overview';
  }
  if (genres.legth === 0) {
    genres = [];
  }
  if (!vote_average) {
    vote_average = 'No vote_average';
  } else {
    vote_average = (vote_average * 10).toFixed();
  }

  poster_path === null
    ? (poster_path =
        'https://thumbs.dreamstime.com/z/ardoise-de-film-et-bobine-de-film-sur-le-bois-36502412.jpg?w=992')
    : (poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`);

  return (
    <>
      <div className={css.filmInfo}>
        <img src={poster_path} alt={title} width="300px" />

        <div className={css.content}>
          <h2 className={css.titleFilm}>
            {original_title} ({release_date})
          </h2>
          <p className={css.scoreFilm}>User Score: {vote_average}%</p>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.overviewText}>{overview}</p>
          <h3 className={css.genre}>Genres</h3>
          <ul className={css.genreList}>
            {genres.map(objGenre => {
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
      </div>
    </>
  );
};

export default MovieDetailsInfo;

MovieDetailsInfo.propTypes = {
  infoAboutFilm: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};
