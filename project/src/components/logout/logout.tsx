import {Link} from 'react-router-dom';
import {MouseEventHandler} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {logoutAction} from '../../store/api-actions';

function Logout(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLAnchorElement> =
    (evt) => {
      evt.preventDefault();
      dispatch(logoutAction());
    };

  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#" onClick={handleClick}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default Logout;
