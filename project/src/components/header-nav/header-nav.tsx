import {Link} from 'react-router-dom';
import Logout from '../logout/logout';
import {AppRoute, AuthStatus} from '../../constants';
import {useAppSelector} from '../../hooks/use-app-selector';

function HeaderNav(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>

            {isAuth
              ? <span className="header__user-name user__name">{user}</span>
              : <span className="header__login">Sign in</span>}
          </Link>
        </li>

        {isAuth && <Logout />}
      </ul>
    </nav>
  );
}

export default HeaderNav;
