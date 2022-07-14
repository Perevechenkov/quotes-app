import { useState } from 'react';
import CommentForm from './CommentForm';
import classes from './Comments.module.scss';

export default function Comments(props) {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddingCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddingCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <CommentForm />}
      <p>Comments</p>
    </section>
  );
}
