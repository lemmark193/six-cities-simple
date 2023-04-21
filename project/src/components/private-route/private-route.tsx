import {AppRoute, AuthStatus} from '../../constants';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from 'react';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isAuth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus]);

  return children;
}

export default PrivateRoute;
