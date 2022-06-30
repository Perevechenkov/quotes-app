import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.scss';

export default function QuoteList(props) {
  return (
    <ul className={classes.list}>
      {props.quotes.map(quote => (
        <QuoteItem key={quote.id} quoteObj={quote} />
      ))}
    </ul>
  );
}
