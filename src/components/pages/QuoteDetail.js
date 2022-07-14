import { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';
import LoadingSpinner from '../UI/LoadingSpinner';

export default function QuoteDetail() {
  const { quoteId } = useParams();
  const match = useRouteMatch();

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
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
