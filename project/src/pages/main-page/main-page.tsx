// Components
import {Helmet} from 'react-helmet-async';
import LoadingMessage from '../../components/loading-message/loading-message';
import OffersSection from '../../components/offers-section/offers-section';
import Map from '../../components/map/map';
import TabsList from '../../components/tabs-list/tabs-list';

// Hooks & Functions
import {useAppSelector} from '../../hooks/useAppSelector';
import classnames from 'classnames';

// Types
import {Offers, CityInfo} from '../../types/offers';

type MainPageProps = {
  offers: Offers;
  city: CityInfo;
}

function MainPage({offers, city}: MainPageProps): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  return (
    <main className={classnames(
      'page__main',
      'page__main--index',
      {'page__main--index-empty': isOffersLoading}
    )}
    >
      <Helmet>
        <title>Six Cities</title>
      </Helmet>

      <h1 className="visually-hidden">Cities</h1>

      <TabsList city={city} />

      <div className="cities">
        <div className={classnames(
          'cities__places-container',
          {'cities__places-container--empty': isOffersLoading},
          'container',
        )}
        >

          {isOffersLoading
            ? <LoadingMessage/>
            : <OffersSection city={city} offers={offers} blockClassName='cities' />}

          <div className="cities__right-section">
            {!isOffersLoading && <Map city={city} offers={offers} blockClassName='cities' />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
