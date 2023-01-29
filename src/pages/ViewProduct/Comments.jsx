import { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://emart-98vu.onrender.com/api/v1/review/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data.data));
  }, [id, comments]);

  return (
    <>
      {comments.length ? (
        <div className="p-3">
          <h3 className="font-bold text-xl text-secondary">
            What others say about the Product
          </h3>
          {comments.map((comment) =>
            comment.comment ? <Comment comment={comment}></Comment> : null
          )}
        </div>
      ) : null}
    </>
  );
};

export default Comments;
