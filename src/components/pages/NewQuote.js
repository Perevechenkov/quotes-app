import { useHistory } from 'react-router-dom';

import QuoteForm from '../quotes/QuoteForm';

export default function NewQuote(props) {
  const history = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
