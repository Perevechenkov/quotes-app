import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.scss';

export default function QuoteForm(props) {
  const [isEntering, setIsEntering] = useState(false);

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

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={location => "Are you sure 'bout that?"}
      />
      <Card>
        <form
          className={classes.form}
          onFocus={formFocusedHandler}
          onSubmit={submitHandler}
        >
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
            <button onClick={finishEnteringHandler} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}
