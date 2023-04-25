import {Outlet, useLocation} from 'react-router-dom';
import Header from '../header/header';
import classnames from 'classnames';
import {AppRoute} from '../../constants';

const ROOM_ROUTE = '/offer/';

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const isOfferPathname = pathname.startsWith(ROOM_ROUTE);

  return (
    <div className={classnames(
      'page',
      {'page--gray': !isOfferPathname},
      {'page--main': pathname === AppRoute.Root},
      {'page--login': pathname === AppRoute.Login},
    )}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
