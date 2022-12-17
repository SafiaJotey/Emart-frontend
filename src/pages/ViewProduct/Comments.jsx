import { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getComment/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  return (
    <>
      {comments.length ? (
        <div className="p-3">
          <h3 className="font-bold" my-3>
            What others say about the Product
          </h3>
          {comments.map((comment) => (
            <Comment comment={comment}></Comment>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Comments;
