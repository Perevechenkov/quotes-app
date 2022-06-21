import { Route } from 'react-router-dom';

export default function Welcome(props) {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path='/welcome/new-user'>
        <p>New User</p>
      </Route>
    </section>
  );
}
