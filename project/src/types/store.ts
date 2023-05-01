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

export type State = {
  currentOffer: CurrentOffer;
  currentOfferReviews: Reviews;
  nearOffers: Offers;
  isCurrentOfferLoading: LoadingStatus;

  isCommentPosting: CommentPostingStatus;
  isCommentPostError: CommentPostErrorStatus;
};

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

export type AppDispatch = typeof store.dispatch;
