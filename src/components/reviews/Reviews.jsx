import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/fetchReviews';
import css from './reviews.module.css';

const Reviews = () => {
  const [infoReviews, setInfoReviews] = useState([]);
  const { movieId } = useParams();
  const [reviewsEmpty, setReviewsEmpty] = useState(false);

  useEffect(() => {
    try {
      const getReviews = async () => {
        const response = await fetchReviews(Number(movieId));
        if (!response) {
          return;
        }
        const reviewsData = response.data.results;
        reviewsData.length !== 0
          ? setInfoReviews(reviewsData)
          : setReviewsEmpty(true);
      };

      getReviews();
    } catch (error) {}
  }, [movieId]);

  return (
    <div>
      {!reviewsEmpty ? (
        <ul className={css.reviewsList}>
          {infoReviews.map(obj => {
            return (
              <li key={obj.id}>
                <p>Author: {obj.author}</p>
                {obj.content}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
