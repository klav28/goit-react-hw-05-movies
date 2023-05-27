import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../vars';
import axios from 'axios';

const Movies = () => {
  const [findedFilms, setFindedFilms] = useState([]);
  const [queryString, setQueryString] = useState([]);

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

    fetchSearch(1).then(data => {
      setFindedFilms(data.results);
    });
  }, [queryString]);

  const handleSearch = ev => {
    ev.preventDefault();
    const { querystring } = ev.target;

    setQueryString(querystring.value);
  };

  return (
    <div>
      Movies Page
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="querystring"
          autoFocus
          placeholder="Search films..."
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
