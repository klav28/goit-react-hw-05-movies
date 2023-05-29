import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../Vars';
import CastCard from '../CastCard/CastCard';

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
      setCast(result.data.cast.slice(0, 18));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('Cast Info -> ', cast);
  }, [cast]);

  return (
    <div>
      {/* <h3 className="text-xl text-gray-700">Cast</h3> */}
      <ul className="flex flex-wrap gap-5 gap-y-7 pt-5">
        {cast.length > 0 &&
          cast.map(el => (
            <li key={el.cast_id}>
              <CastCard cast={el} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
