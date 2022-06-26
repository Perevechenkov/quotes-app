import { useParams } from 'react-router-dom';

export default function QuoteDetail(props) {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
    </>
  );
}
