import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../constants';
import {useAppSelector} from '../../hooks/useAppSelector';

function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  const signoutElement = (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#">
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>

            {isAuth
              ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
              : <span className="header__login">Sign in</span>}
          </Link>
        </li>

        {isAuth && signoutElement}
      </ul>
    </nav>
  );
}

export default HeaderNav;
