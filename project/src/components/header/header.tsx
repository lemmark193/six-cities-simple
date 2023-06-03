import {Link, useLocation} from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';
import {AppRoute} from '../../data/constants';

function Header(): JSX.Element {
  const {pathname} = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>

          {pathname !== AppRoute.Login && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
