const Comment = ({ comment }) => {
  return (
    <div className="bg-bannerBg my-2 p-5 w-full md:w-2/3">
      <h3 className="text-base md:text-xl font-bold">{comment.userEmail}</h3>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
