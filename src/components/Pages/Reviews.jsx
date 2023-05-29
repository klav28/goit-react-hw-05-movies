import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsItem from '../ReviewItem/ReviewItem';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../Vars';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async page => {
      try {
        return await axios.get(`${BASE_URL}movie/${movieId}/reviews`, {
          params: {
            api_key: API_KEY,
          },
        });
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchReviews(movieId).then(result => {
      setReviews(result.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Reviews Info -> ', reviews);
  }, [reviews]);

  return (
    <div>
      <ul className="py-5">
        {reviews.length > 0 ? (
          reviews.map(el => (
            <li key={el.id}>
              <ReviewsItem item={el} />
            </li>
          ))
        ) : (
          <p className="text-center text-lg text-red-950">
            No Reviews for this Film
          </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
