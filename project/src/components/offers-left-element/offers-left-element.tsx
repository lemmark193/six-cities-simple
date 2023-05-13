import LoadingMessage from '../loading-message/loading-message';
import NoPlaces from '../no-places/no-places';
import {LoadingStatus} from '../../types/store';

type OffersLeftElementProps = {
  isOffersLoading: LoadingStatus;
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
