import { useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';
import QuoteList from '../quotes/QuoteLIst';
import LoadingSpinner from '../UI/LoadingSpinner';

export default function AllQuotes(props) {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />{' '}
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p className='centered focused'>No quotes found</p>;
  }

  return <QuoteList quotes={loadedQuotes} />;
}
