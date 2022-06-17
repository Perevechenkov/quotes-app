import { Link } from 'react-router-dom';

export default function MainHeader(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
