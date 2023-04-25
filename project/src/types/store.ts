import {AuthStatus, SortType} from '../constants';
import {store} from '../store/store';
import {CityInfo, Offer, Offers} from './offers';
import {Reviews} from'./reviews';

export type ActiveOfferId = number | null;

export type LoadingStatus = boolean;

export type CurrentOffer = Offer | null;

export type CommentPostErrorStatus = boolean;

export type CommentPostingStatus = boolean;

export type State = {
  city: CityInfo;
  activeOfferId: ActiveOfferId;
  offers: Offers;
  isOffersLoading: LoadingStatus;

  currentOffer: CurrentOffer;
  currentOfferReviews: Reviews;
  nearOffers: Offers;
  isCurrentOfferLoading: LoadingStatus;

  sortType: SortType;

  authStatus: AuthStatus;

  isCommentPosting: CommentPostingStatus;
  isCommentPostError: CommentPostErrorStatus;
};

export type AppDispatch = typeof store.dispatch;
