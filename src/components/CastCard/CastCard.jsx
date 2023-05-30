import { IMAGE_BASE_URL, noAvatar } from '../Vars';
import PropTypes from 'prop-types';

const CastCard = ({ cast }) => {
  return (
    <div className="flex w-44 flex-col px-0.5">
      <img
        className="mb-3 h-52 w-44 rounded-xl object-cover object-left-top shadow-sm"
        src={
          cast.profile_path
            ? `${IMAGE_BASE_URL}w200/${cast.profile_path}`
            : `${noAvatar}`
        }
        alt={cast.name}
      />
      <p className="li text-center text-lg font-normal leading-4 text-black">
        {cast.name}
      </p>
      <p className="pt-2 text-center text-lg font-light leading-4 text-amber-900">
        {cast.character}
      </p>
    </div>
  );
};

CastCard.propTypes = {
  film: PropTypes.object,
};

export default CastCard;
