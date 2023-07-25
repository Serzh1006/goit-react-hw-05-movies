import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchDetailsFilm } from 'services/fetchDetailsFilm';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [genre, setGenre] = useState([]);
  const [imgsrc, setImgsrc] = useState('');
  const [altimg, setAltImg] = useState('');
  const [year, setYear] = useState('');
  const [userScore, setUserScore] = useState(0);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      const detailsFilm = async () => {
        const responce = await fetchDetailsFilm(Number(movieId));
        if (responce.status === 200) {
          const dataObj = responce.data;
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
    <div>
      <Link to={backLink}>Go Back</Link>
      <img src={imgsrc} alt={altimg} width="320px" />
      <h2>
        {title} ({year})
      </h2>
      <p>User Score: {userScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genre.map(objGenre => {
          return (
            <li key={objGenre.id}>
              <p>{objGenre.name}</p>
            </li>
          );
        })}
      </ul>

      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
