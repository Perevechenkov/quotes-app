import { useRef, useState, useCallback } from 'react';

import Card from '../../UI/Card';
import LoadingSpinner from '../../UI/LoadingSpinner';
import classes from './QuoteForm.module.scss';
import Input from '../../UI/Input';
import { isNotEmpty } from '../../../helpers/inputValidation';

export default function QuoteForm(props) {
  const authorRef = useRef();
  const textRef = useRef();

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  let formIsValid = false;

  if (authorRef?.current?.isValid() && textRef?.current?.isValid()) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    const author = authorRef.current;
    const text = textRef.current;

    if (!author.isValid() || !text.isValid()) {
      return;
    }

    props.onAddQuote({
      author: author.value,
      text: text.value,
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
          <Input
            name='Author'
            type='text'
            ref={authorRef}
            validationFn={isNotEmpty}
            validationErrMessage='Author must not be empty'
            upd={forceUpdate}
          />
          <Input
            name='Text'
            type='text'
            ref={textRef}
            validationFn={isNotEmpty}
            validationErrMessage='Quote must not be empty'
            upd={forceUpdate}
          />

          <div className={classes.actions}>
            <button disabled={!formIsValid} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}
