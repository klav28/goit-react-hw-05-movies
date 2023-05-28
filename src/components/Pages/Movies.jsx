import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../Container/Container';
import Searchbar from '../Searchbar/Searchbar';
import { API_KEY, BASE_URL } from '../Vars';
import axios from 'axios';
import FilmGallery from 'components/FIlmGallery/FilmGallery';

const Movies = () => {
  const [findedFilms, setFindedFilms] = useState([]);
  const [searchParams] = useSearchParams();

  const queryString = searchParams.get('query') ?? '';

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
    <Container>
      <Searchbar querystring={queryString} />
      {findedFilms.length > 0 && <FilmGallery filmArray={findedFilms} />}
    </Container>
  );
};

export default Movies;
