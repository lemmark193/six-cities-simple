import {Fragment} from 'react';

// Components
import OfferCard from '../offer-card/offer-card';

// Types
import {Offers} from '../../types/offers';

type OffersListProps = {
  offers: Offers;
  blockClassName: string;
}


function OffersList({offers, blockClassName}: OffersListProps): JSX.Element {
  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          blockClassName={blockClassName}
        />
      ))}
    </Fragment>
  );
}

export default OffersList;
