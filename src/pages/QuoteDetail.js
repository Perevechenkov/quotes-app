import { useEffect } from 'react';
import { Link, Route, useParams, Routes } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

export default function QuoteDetail() {
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest({ file: quoteId });
  }, [sendRequest, quoteId]);

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

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}>
        {quote.text}
      </HighlightedQuote>
      <div className='centered'>
        <Link className='btn--flat' to={'comments'}>
          Load Comments
        </Link>
      </div>
      <Routes>
        <Route path={'comments'} element={<Comments />} />
      </Routes>
    </>
  );
}
