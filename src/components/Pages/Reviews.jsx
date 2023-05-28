import { useState, useEffect } from 'react';
import axios from 'axios';
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
      <h3>REVIEWS</h3>
      <ul>
        {reviews.map(el => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
