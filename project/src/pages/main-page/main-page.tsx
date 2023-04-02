import {Helmet} from 'react-helmet-async';

// Components
import OffersSection from '../../components/offers-section/offers-section';
import Map from '../../components/map/map';

// Types
import {Offers, CityInfo} from '../../types/offers';

type MainPageProps = {
  offers: Offers;
  city: CityInfo;
}

function MainPage({offers, city}: MainPageProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#TODO">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#TODO">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#TODO">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active" href="#TODO">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#TODO">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#TODO">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersSection offers={offers} />
          <div className="cities__right-section">
            <Map city={city} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
