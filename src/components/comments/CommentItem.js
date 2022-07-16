import classes from './CommentItem.module.scss';

export default function CommentItem(props) {
  return (
    <li className={classes.comment}>
      <p>{props.date}</p>
      <h3>{props.author} says...</h3>
      <p>{props.text}</p>
    </li>
  );
}
