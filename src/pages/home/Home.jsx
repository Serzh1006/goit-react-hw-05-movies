import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchFilms from 'components/searchFilms/SearchFilms';
import { fetchTrendingAll } from 'services/fetchTrendingAll';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      const fetchOnServer = async () => {
        const promise = await fetchTrendingAll();
        if (!promise) {
          return;
        }
        setPopularFilms(promise.data.results);
      };
      fetchOnServer();
    } catch (error) {
      console.log(error.message);
    }
  }, [location]);

  return (
    <div>
      {popularFilms.length > 0 && (
        <SearchFilms films={popularFilms} onLocation={location} />
      )}
    </div>
  );
};

export default Home;
