import {AuthStatus, SortType} from '../constants';
import {store} from '../store/store';
import {CityInfo, Offer, Offers} from './offers';
import {Reviews} from'./reviews';

export type ActiveOfferId = number | null;

export type LoadingStatus = boolean;

export type CurrentOffer = Offer | null;

export type CommentPostErrorStatus = boolean;

export type CommentPostingStatus = boolean;

export type User = string | null;

export type ErrorType = string | null;

export type UserProcessState = {
  user: User;
  authStatus: AuthStatus;
}

export type DataMainProcessState = {
  city: CityInfo;
  activeOfferId: ActiveOfferId;
  offers: Offers;
  isOffersLoading: LoadingStatus;
  sortType: SortType;
  error: ErrorType;
}

export type DataRoomProcessState = {
  currentOffer: CurrentOffer;
  currentOfferReviews: Reviews;
  nearOffers: Offers;
  isCurrentOfferLoading: LoadingStatus;
}

export type ReviewProcessState = {
  isCommentPosting: CommentPostingStatus;
  isCommentPostError: CommentPostErrorStatus;
}

export type RoomData = {
  offer: Offer;
  reviews: Reviews;
  nearOffers: Offers;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
