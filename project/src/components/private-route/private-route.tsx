import AuthPage from '../../pages/auth-page/auth-page';
import {AuthStatus} from '../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute({children, authStatus}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <AuthPage />
  );
}

export default PrivateRoute;
