import classes from './CommentItem.module.scss';

export default function CommentItem(props) {
  return (
    <li className={classes.comment}>
      <p>{props.text}</p>
    </li>
  );
}
