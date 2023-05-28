import React, { useState, useEffect } from 'react';
import { API_KEY, BASE_URL } from '../Vars';
import axios from 'axios';
import FilmGallery from 'components/FIlmGallery/FilmGallery';

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
      <h1 className="p-5 pt-7 text-center text-4xl">
        Trending Movies of the Day
      </h1>
      <FilmGallery filmArray={films} />
    </div>
  );
};

export default Home;
