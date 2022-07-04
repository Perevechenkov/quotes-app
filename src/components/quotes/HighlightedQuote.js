import classes from './HighlightedQuote.module.scss';

export default function HighlightedQuote(props) {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
}
