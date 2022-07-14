import classes from './CommentsList.module.scss';

import CommentItem from './CommentItem';

export default function CommentsList(props) {
  return (
    <ul className={classes.comments}>
      {props.comments.map(comment => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
}
