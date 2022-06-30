import QuoteList from '../quotes/QuoteLIst';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Obi-Wan Kenobi', text: 'Hello there' },
  { id: 'q2', author: 'Darth Maul', text: 'KENOBIIIIIIEEE' },
];

export default function AllQuotes(props) {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
}
