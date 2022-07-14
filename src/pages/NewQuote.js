import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import QuoteForm from '../components/quotes/QuoteForm';

export default function NewQuote(props) {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = quoteData => {
    sendRequest({ body: quoteData });
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
}
