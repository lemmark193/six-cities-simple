// Components
import {Helmet} from 'react-helmet-async';
import OffersSection from '../../components/offers-section/offers-section';
import Map from '../../components/map/map';
import TabsList from '../../components/tabs-list/tabs-list';

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

      <TabsList city={city} />

      <div className="cities">
        <div className="cities__places-container container">
          <OffersSection city={city} offers={offers} blockClassName='cities' />
          <div className="cities__right-section">
            <Map city={city} offers={offers} blockClassName='cities' />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
