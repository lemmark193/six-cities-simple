import {Fragment, useState} from 'react';

// Components
import OfferCard from '../offer-card/offer-card';

// Types
import {Offers} from '../../types/offers';

type OffersListProps = {
  offers: Offers;
}

type OffersState = {
  active: number | null;
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [offerState, setOfferState] = useState<OffersState>({
    active: null,
  });

  function handleMouseEnter(id: number): void {
    if (offerState.active === id) {
      return;
    }

    setOfferState((prevState) => {
      // eslint-disable-next-line no-console
      console.log('active: ', id);

      return {
        ...prevState,
        active: id,
      };
    });
  }

  return (
    <Fragment>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </Fragment>
  );
}

export default OffersList;
