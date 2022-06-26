import { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch(`https://afternoon-gorge-26422.herokuapp.com/getComment/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);
  console.log(comments);

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
