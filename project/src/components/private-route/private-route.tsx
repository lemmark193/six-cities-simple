import AuthPage from '../../pages/auth-page/auth-page';
import {AuthStatus} from '../../constants';
import {useAppSelector} from '../../hooks/useAppSelector';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <AuthPage />
  );
}

export default PrivateRoute;
