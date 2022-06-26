import { Route, useParams } from 'react-router-dom';
import Comments from '../comments/Comments';

export default function QuoteDetail(props) {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
