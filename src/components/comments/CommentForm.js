import { useCallback, useEffect, useRef, useState } from 'react';
import { isNotEmpty } from '../../helpers/inputValidation';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import Input from '../UI/Input';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './CommentForm.module.scss';

export default function CommentForm({ quoteId, onAddedComment }) {
  const authorRef = useRef();
  const commentRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  let formIsValid = false;

  if (authorRef?.current?.isValid() && commentRef?.current?.isValid()) {
    formIsValid = true;
  }

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = event => {
    event.preventDefault();

    const author = authorRef.current;
    const comment = commentRef.current;

    if (!author.isValid() || !comment.isValid()) {
      return;
    }

    author.reset();
    comment.reset();

    sendRequest({
      body: {
        author: author.value,
        text: comment.value,
        quoteId: quoteId,
        date: new Date(),
      },
      file: quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <Input
        name='Your name'
        type='text'
        ref={authorRef}
        validationFn={isNotEmpty}
        validationErrMessage='Your name must not be empty'
        upd={forceUpdate}
      />
      <Input
        name='Your Comment'
        type='text'
        inputFieldTag='textarea'
        ref={commentRef}
        validationFn={isNotEmpty}
        validationErrMessage='Your Comment must not be empty'
        upd={forceUpdate}
      />
      <div className={classes.actions}>
        <button disabled={!formIsValid} className='btn'>
          Add Comment
        </button>
      </div>
    </form>
  );
}
