import classes from './Card.module.scss';

export default function Cart(props) {
  return <div className={classes.card}>{props.children}</div>;
}
