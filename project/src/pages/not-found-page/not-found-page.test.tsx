import {render, screen} from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      </HelmetProvider>
    );

    const headerElement = screen.getByText(/Error 404(\s)*Page not found :\(/);
    const linkElement = screen.getByText('Go back to the main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
