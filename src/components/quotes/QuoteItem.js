import classes from './QuoteItem.module.scss';

export default function QuoteItem({ quoteObj }) {
  const { text, author } = quoteObj;

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <a className='btn'>View Fullscreen</a>
    </li>
  );
}
