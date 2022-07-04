import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.scss';

export default function QuoteItem({ quoteObj }) {
  const { id, text, author } = quoteObj;

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
}
