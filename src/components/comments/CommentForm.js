import { useRef } from 'react';
import classes from './CommentForm.module.scss';

export default function CommentForm(props) {
  const commentRef = useRef();

  const submitFormHandler = event => {
    event.preventDefault();

    const comment = commentRef.current.value;

    if (comment.trim().length === 0) {
      return;
    }

    console.log(comment);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
}
