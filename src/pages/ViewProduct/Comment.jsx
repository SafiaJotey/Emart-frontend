import { AiTwotoneStar } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
import Rating from 'react-rating';
const Comment = ({ comment }) => {
  return (
    <div className="border border-shape shadow my-2 p-5 w-full md:w-2/3">
      <h3 className="text-base md:text-xl font-bold text-secondary">
        {comment?.name}
      </h3>
      <p className="text-base md:text-md text-baseColor font-bold">
        {comment.userEmail}
      </p>
      <Rating
        initialRating={comment.newReview}
        className="text-reviewColor"
        readonly
        emptySymbol={<FiStar />}
        fullSymbol={<AiTwotoneStar />}
      />
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
