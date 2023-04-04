import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

// data
import {City, offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={offers} cities={City} reviews={reviews} />
  </React.StrictMode>,
);
