import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getTitle from 'helpers/getTitle';
import css from './searchFilms.module.css';

const SearchFilms = ({ films, onLocation }) => {
  return (
    <ul className={css.listFilms}>
      {films.map(obj => {
        const title = getTitle(obj);
        return (
          <li key={obj.id}>
            <Link
              className={css.itemListFilm}
              to={`/movies/${obj.id}`}
              state={{ from: onLocation }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchFilms;

SearchFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
  onLocation: PropTypes.object.isRequired,
};
