// React
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

// Components & Pages
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

// Constants
import {AppRoute, AuthStatus} from '../../constants';

// Types
import {Offers, CitiesEnum} from '../../types/offers';

type AppProps = {
  offers: Offers;
  cities: CitiesEnum;
}

function App({offers, cities}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout/>}>
            <Route
              index
              element={<MainPage offers={offers} city={cities.Amsterdam}/>}
            />

            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authStatus={AuthStatus.NoAuth}>
                  <MainPage offers={offers} city={cities.Amsterdam}/>
                </PrivateRoute>
              }
            />

            <Route path={AppRoute.Room} element={<RoomPage />}>
              <Route path=":id" element={<RoomPage />}/>
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
