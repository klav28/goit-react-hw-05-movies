const ReviewsItem = ({ item }) => {
  return (
    <p className="py-3 text-lg font-bold leading-3 text-teal-800">
      {item.author}:{' '}
      <span className="text-sm font-normal italic text-gray-600">
        {item.content}
      </span>
    </p>
  );
};

export default ReviewsItem;
