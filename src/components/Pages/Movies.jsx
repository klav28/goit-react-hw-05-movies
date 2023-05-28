import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { API_KEY, BASE_URL } from '../Vars';
import axios from 'axios';

const Movies = () => {
  const [findedFilms, setFindedFilms] = useState([]);
  const [searchParams] = useSearchParams();

  const queryString = searchParams.get('query') ?? '';
  console.log('Query -> ', queryString);

  useEffect(() => {
    const fetchSearch = async page => {
      try {
        const response = await axios.get(`${BASE_URL}search/movie`, {
          params: {
            api_key: API_KEY,
            query: queryString,
            page: page,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    if (queryString.trim !== '') {
      fetchSearch(1).then(data => {
        setFindedFilms(data.results);
      });
    }
  }, [queryString]);

  return (
    <div>
      Movies Page
      <form>
        <input
          type="text"
          name="query"
          autoFocus
          placeholder="Search films..."
          defaultValue={queryString}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {findedFilms.length > 0 &&
          findedFilms.map(film => <p key={film.id}>{film.title}</p>)}
      </div>
    </div>
  );
};

export default Movies;
