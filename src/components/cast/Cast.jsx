import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from '../../services/fetchActors';
import css from './cast.module.css';

const Cast = () => {
  const [castArray, setCastArray] = useState([]);
  const [cast, setCast] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    try {
      const getActorsData = async () => {
        const responce = await fetchActors(Number(movieId));
        if (!responce) {
          return;
        }
        responce.data.cast.length !== 0
          ? setCastArray(responce.data.cast)
          : setCast(true);
      };
      getActorsData();
    } catch (error) {
      alert(error.message);
    }
  }, [movieId]);

  return (
    <div>
      {!cast ? (
        <ul className={css.castList}>
          {castArray.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path === null ? (
                  <img
                    src={
                      'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
                    }
                    alt="No foto"
                    width="128"
                  />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    width="128"
                  />
                )}

                {actor.original_name}
                <p className={css.character}>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </div>
  );
};

export default Cast;
