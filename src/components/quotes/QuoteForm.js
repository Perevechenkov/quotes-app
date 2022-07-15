import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.scss';

export default function QuoteForm(props) {
  const authorRef = useRef();
  const textRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const author = authorRef.current.value;
    const text = textRef.current.value;

    if (author.trim().length === 0 && text.trim().length === 0) {
      return;
    }

    props.onAddQuote({
      author,
      text,
    });
  };

  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
}
