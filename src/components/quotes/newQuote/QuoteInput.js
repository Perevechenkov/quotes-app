import { forwardRef, useEffect, useId, useImperativeHandle } from 'react';
import useInput from '../../../hooks/use-input';
import classes from './QuoteInput.module.scss';

export default forwardRef(function QuoteInput(props, ref) {
  const { validationFn, validationErrMessage, name, type, upd } = props;

  const id = useId();

  useImperativeHandle(ref, () => ({
    value: value,
    isValid() {
      return isValid;
    },
  }));

  const { value, isValid, hasError, valueChangeHandler, inputBlurHandler } =
    useInput(validationFn);

  useEffect(() => {
    upd();
  }, [value, upd]);

  const inputClasses = hasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
      ></input>
      {hasError && (
        <p className={classes['error-text']}>{validationErrMessage}</p>
      )}
    </div>
  );
});
