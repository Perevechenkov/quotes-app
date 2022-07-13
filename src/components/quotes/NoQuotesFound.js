import classes from './NoQuotesFound.module.scss';
import { Link } from 'react-router-dom';

export default function NoQuotesFound() {
  return (
    <div className={classes.noquotes}>
      <p className='focused'>No quotes found</p>
      <Link className='btn' to='/new-quote'>
        Add a quote
      </Link>
    </div>
  );
}
