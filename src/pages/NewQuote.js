import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import QuoteForm from '../components/quotes/newQuote/QuoteForm';

export default function NewQuote(props) {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate]);

  const addQuoteHandler = quoteData => {
    sendRequest({ body: quoteData });
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
}
