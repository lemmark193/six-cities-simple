import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';

// data
import {City, offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} cities={City} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
