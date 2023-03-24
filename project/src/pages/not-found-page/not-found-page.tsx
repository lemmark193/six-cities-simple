import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>404 Not Found | Six Cities</title>
      </Helmet>
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
