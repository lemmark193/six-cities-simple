import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <Fragment>
      <h1>
        Error 404
        <br />
        Page not found :(
      </h1>
      <Link to="/">Go back to the main page</Link>
    </Fragment>
  );
}

export default NotFoundPage;
