import { Link } from 'react-router-dom';

export default function Products(props) {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to='products/p1'>Book</Link>
        </li>
        <li>
          <Link to='products/p2'>Book</Link>
        </li>
        <li>
          <Link to='products/p3'>Book</Link>
        </li>
      </ul>
    </section>
  );
}
