import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Obi-Wan Kenobi', text: 'Hello there' },
  { id: 'q2', author: 'Darth Maul', text: 'KENOBIIIIIIEEE' },
];

export default function QuoteDetail(props) {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
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
