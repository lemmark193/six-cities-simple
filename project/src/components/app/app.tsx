// React
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components & Pages
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import AuthPage from '../../pages/auth-page/auth-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

// Constants
import {AppRoute} from '../../constants';

type AppProps = {
  adsCount: number;
}

function App({adsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout/>}>
          <Route index element={<MainPage adsCount={adsCount}/>} />
          <Route path={AppRoute.Login} element={<AuthPage />} />
          <Route path={AppRoute.Room} element={<RoomPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
