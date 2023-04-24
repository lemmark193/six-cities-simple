// Components
import Sorting from '../sorting/sorting';
import OffersList from '../offers-list/offers-list';

import {getThingsCountString} from '../../utils';

// Types
import {CityInfo, Offers} from '../../types/offers';

type OffersSectionProps = {
  city: CityInfo;
  offers: Offers;
  blockClassName: string;
}

function OffersSection({city, offers, blockClassName}: OffersSectionProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{getThingsCountString(offers.length, 'place')} to stay in {city.name}</b>

      <Sorting />

      <div className="cities__places-list places__list tabs__content">
        <OffersList offers={offers} blockClassName={blockClassName} />
      </div>
    </section>
  );
}

export default OffersSection;
