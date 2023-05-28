import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../Vars';
import axios from 'axios';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchTrends = async page => {
      try {
        const response = await axios.get(`${BASE_URL}trending/movie/day`, {
          params: {
            api_key: API_KEY,
            page: page,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchTrends(1).then(data => {
      setFilms(data.results);
    });
  }, []);

  useEffect(() => {
    console.log(films);
  }, [films]);

  return (
    <div>
      <h1>Trended Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
