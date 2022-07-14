import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentForm from './CommentForm';
import classes from './Comments.module.scss';
import CommentsList from './CommentsList';

export default function Comments(props) {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();

  const {
    sendRequest,
    data: loadedComments,
    status,
  } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest({ file: quoteId });
  }, [sendRequest, quoteId]);

  const startAddingCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest({ file: quoteId });
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  } else if (status === 'completed' && loadedComments.length === 0) {
    comments = <p className='centered'>No comments were added yet</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddingCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <CommentForm quoteId={quoteId} onAddedComment={addCommentHandler} />
      )}
      {comments}
    </section>
  );
}
