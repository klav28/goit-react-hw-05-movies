import StGalleryItem from './FilmGalleryItem.components';

const FilmGalleryItem = ({ film }) => {
  return (
    <StGalleryItem>
      <StGalleryItem.Img src={`${film.posterUrl}`} alt={film.title} />
      <StGalleryItem.Vote>{film.votes}</StGalleryItem.Vote>
      <StGalleryItem.Title>{film.title}</StGalleryItem.Title>
      <StGalleryItem.Details>{film.details}</StGalleryItem.Details>
    </StGalleryItem>
  );
};

export default FilmGalleryItem;
