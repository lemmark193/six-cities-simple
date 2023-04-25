import LoadingMessage from '../loading-message/loading-message';
import NoPlaces from '../no-places/no-places';

type OffersLeftElementProps = {
  isOffersLoading: boolean;
  isEmptyOffers: boolean;
  children: JSX.Element;
}

function OffersLeftElement({isOffersLoading, isEmptyOffers, children}: OffersLeftElementProps): JSX.Element {
  if (isOffersLoading) {
    return <LoadingMessage />;
  }

  if (isEmptyOffers) {
    return <NoPlaces />;
  }

  return children;
}

export default OffersLeftElement;
