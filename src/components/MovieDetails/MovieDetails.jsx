import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from 'components/vars';

const MovieInfo = () => {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState([]);

  useEffect(() => {
    const fetchFilm = async page => {
      try {
        return await axios.get(`${BASE_URL}movie/${movieId}`, {
          params: {
            api_key: API_KEY,
          },
        });
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchFilm(movieId).then(result => {
      console.log('Movie Info -> ', result.data);
      setFilmInfo(result.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <h1>{filmInfo.title}</h1>
        <img
          src={`${IMAGE_BASE_URL}w500/${filmInfo.poster_path}`}
          alt={filmInfo.title}
        />
      </div>
      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieInfo;
