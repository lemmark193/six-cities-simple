// React
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

// Components & Pages
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import AuthPage from '../../pages/auth-page/auth-page';

// Hooks & functions
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectByCity} from '../../store/selectors';

// Constants
import {AppRoute} from '../../constants';

function App(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => selectByCity(state));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout/>}>
            <Route
              index
              element={<MainPage offers={offers} city={city}/>}
            />

            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute>
                  <AuthPage />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoute.Room}
              element={<RoomPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
