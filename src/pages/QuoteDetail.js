import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

export default function QuoteDetail() {
  const { quoteId } = useParams();
  const navigate = useNavigate();

  const [displayingComments, setDisplayingComments] = useState(false);

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest({ file: quoteId });
  }, [sendRequest, quoteId]);

  const toggleDisplayComments = () => {
    setDisplayingComments(prev => !prev);
  };

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (!quote.text || !quote.author) {
    return <p className='centered focused'>No quote found</p>;
  }

  let commentsControl = (
    <Link className='btn--flat' to='comments' onClick={toggleDisplayComments}>
      Load Comments
    </Link>
  );

  if (displayingComments) {
    commentsControl = (
      <div
        className='btn--flat'
        onClick={() => {
          toggleDisplayComments();
          navigate(-1);
        }}
      >
        Hide comments
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}>
        {quote.text}
      </HighlightedQuote>
      <div className='centered'>{commentsControl}</div>
      <Outlet />
    </>
  );
}
