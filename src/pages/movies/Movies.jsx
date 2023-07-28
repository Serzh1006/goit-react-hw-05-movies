import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchFilms from 'components/searchFilms/SearchFilms';
import { fetchSearchMovie } from 'services/fetchSearchMovie';
import css from './movies.module.css';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [dataArray, setDataArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getFilmByQuery = async () => {
      try {
        const response = await fetchSearchMovie(query);
        if (!response) {
          return;
        }
        setDataArray(response.data.results);
      } catch (error) {
        alert(error.message);
      }
    };

    getFilmByQuery();
  }, [query, location]);

  const submitByQuery = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      return alert('enter query');
    }
    setSearchParams({ query: searchValue.trim() });
    setSearchValue('');
  };

  const getValue = e => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitByQuery} className={css.form}>
        <input
          className={css.input}
          value={searchValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={getValue}
        />
        <button className={css.btnSubmit} type="submit">
          Search
        </button>
      </form>
      {dataArray.length !== 0 && (
        <SearchFilms films={dataArray} onLocation={location} />
      )}
    </>
  );
};

export default Movies;
