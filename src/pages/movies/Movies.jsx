import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'services/fetchSearchMovie';

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
        if (response.status === 200) {
          const data = response.data.results;
          const getData = data.map(obj => {
            return (
              <li key={obj.id}>
                <Link to={`/movies/${obj.id}`} state={{ from: location }}>
                  {obj.title}
                </Link>
              </li>
            );
          });
          setDataArray(getData);
        }
      } catch (error) {}
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
      <form onSubmit={submitByQuery}>
        <label htmlFor="input">Search Film</label>
        <input
          value={searchValue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          id="input"
          onChange={getValue}
        />
        <button type="submit">Search</button>
      </form>
      {query !== '' && <ul>{dataArray}</ul>}
    </>
  );
};

export default Movies;
