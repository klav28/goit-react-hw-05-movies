import StMovieDetails from './MovieInfoDetails.component';
import { IMAGE_BASE_URL } from '../Vars';

const MovieInfoDetails = ({ movie }) => {
  const genreslist = movie.genres.map(el => el.name).join(', ');
  const year = movie.release_date.slice(0, 4);

  return (
    <StMovieDetails>
      <StMovieDetails.Poster
        src={`${IMAGE_BASE_URL}w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <StMovieDetails.Info>
        <h2 className="p-5 text-3xl font-bold">
          {movie.title} <span className="font-thin">({year})</span>
        </h2>
        <p className="px-5 text-lg text-teal-800">{genreslist}</p>
        <p className="px-5 pt-4 text-2xl italic text-orange-500 ">
          {movie.tagline}
        </p>
        <p className="p-5">{movie.overview}</p>
      </StMovieDetails.Info>
    </StMovieDetails>
  );
};

export default MovieInfoDetails;
