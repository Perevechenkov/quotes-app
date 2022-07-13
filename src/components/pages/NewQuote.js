import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';

import QuoteForm from '../quotes/QuoteForm';

const addQuote = async quoteData => {
  const response = await fetch(
    'https://quotes-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/quotes.json',
    {
      method: 'POST',
      body: JSON.stringify(quoteData),
      headers: {
        'Content-Type': 'applicaton/json',
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
};

export default function NewQuote(props) {
  const history = useHistory();
  const { sendRequest, httpState } = useHttp(addQuote);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
