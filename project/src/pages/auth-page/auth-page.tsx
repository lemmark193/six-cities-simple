import {FormEvent, useRef} from 'react';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {AuthData} from '../../types/auth';
import {loginAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/use-app-selector';
import {AppRoute, AuthStatus} from '../../data/constants';
import {Navigate} from 'react-router-dom';
import TabLink from '../../components/tab-link/tab-link';
import { City } from '../../data/cities';
import {getAuthStatus} from '../../store/user-process/selectors';

const isValidPassword = (password: string)
  : boolean => /\p{L}/u.test(password) && /\d/.test(password);

function AuthPage(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    const {password} = authData;

    if (isValidPassword(password)) {
      dispatch(loginAction(authData));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppRoute.Root}/>;
  }

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Login | Six Cities</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>

              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>

              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>

        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <TabLink cityName={City.Amsterdam.name} toMainPage />
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthPage;
