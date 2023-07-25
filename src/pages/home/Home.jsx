import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingAll } from 'services/fetchTrendingAll';
import getTitle from 'helpers/getTitle';
import css from './home.module.css';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchOnServer = async () => {
      const promise = await fetchTrendingAll();
      if ((promise.status = 200)) {
        const dataRes = promise.data.results;
        const basedata = dataRes.map(obj => {
          const title = getTitle(obj);
          return (
            <li key={obj.id}>
              <Link
                className={css.itemListFilm}
                to={`/movies/${obj.id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        });
        setPopularFilms(basedata);
      }
    };
    fetchOnServer();
  }, [location]);
  return <ul className={css.listFilms}>{popularFilms}</ul>;
};

export default Home;
