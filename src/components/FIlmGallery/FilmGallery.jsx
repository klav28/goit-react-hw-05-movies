import FilmGalleryItem from 'components/FilmGalleryItem/FilmGalleryItem';
import StContainer from './FilmGallery.components';
import Container from '../Container/Container';
import { IMAGE_BASE_URL, noPosterUrl, genres } from '../Vars';
import PropTypes from 'prop-types';

const FilmGallery = ({ filmArray }) => {
  const filmsList = filmArray.map(film => {
    const posterUrl = film.poster_path
      ? `${IMAGE_BASE_URL}w500/${film.poster_path}`
      : `${noPosterUrl}`;

    let details = '';

    if (film.genre_ids.length > 0) {
      details = film.genre_ids
        .slice(0, 2)
        .map(id => genres[id])
        .join(', ');

      if (film.genre_ids.length > 2) {
        details += ', other';
      }

      if (film.release_date) {
        details += ' | ' + film.release_date.substr(0, 4);
      }
    } else if (film.release_date) {
      details = film.release_date.substr(0, 4);
    }

    const vote = String(Math.round(film.vote_average * 10));
    const votes = vote === '0' ? '0' : vote[0] + '.' + vote[1];

    return { ...film, posterUrl, details, votes };
  });

  return (
    <Container>
      <StContainer.Ul>
        {filmsList.map(film => (
          <li key={film.id}>
            <StContainer.Card>
              <StContainer.Link to={`/movies/${film.id}`}>
                <FilmGalleryItem film={film} />
              </StContainer.Link>
            </StContainer.Card>
          </li>
        ))}
      </StContainer.Ul>
    </Container>
  );
};

FilmGallery.propTypes = {
  filmArray: PropTypes.array.isRequired,
};

export default FilmGallery;
