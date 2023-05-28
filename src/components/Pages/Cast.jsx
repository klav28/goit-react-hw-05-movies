import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../Vars';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async page => {
      try {
        return await axios.get(`${BASE_URL}movie/${movieId}/credits`, {
          params: {
            api_key: API_KEY,
          },
        });
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCast(movieId).then(result => {
      setCast(result.data.cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Cast Info -> ', cast);
  }, [cast]);

  return (
    <div>
      <h3 className="text-xl text-gray-700">Cast</h3>
      <ul>
        {cast.length > 0 &&
          cast.map(el => (
            <li key={el.cast_id}>
              {el.name} | {el.character}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;