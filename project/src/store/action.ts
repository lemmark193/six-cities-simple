import {createAction} from '@reduxjs/toolkit';
import {CityInfo, Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {ActiveOfferId, CommentPostErrorStatus, CommentPostingStatus, ErrorType, LoadingStatus} from '../types/store';
import {SortType} from '../constants';

export const changeCity = createAction<CityInfo>('changeCity');

export const loadOffers = createAction<Offers>('loadOffers');

export const setActiveOfferId = createAction<ActiveOfferId>('setActiveOfferId');

export const setOffersLoadingStatus = createAction<LoadingStatus>('setOffersLoadingStatus');

export const loadOfferById = createAction<Offer>('loadOfferById');

export const loadOfferReviews = createAction<Reviews>('loadOfferReviews');

export const loadNearOffers = createAction<Offers>('loadNearOffers');

export const setCurrentOfferLoadingStatus = createAction<LoadingStatus>('setCurrentOfferLoadingStatus');

export const setCommentPostingStatus = createAction<CommentPostingStatus>('setCommentPostingStatus');

export const setCommentPostErrorStatus = createAction<CommentPostErrorStatus>('setCommentPostErrorStatus');

export const setSortType = createAction<SortType>('setSortType');

export const setError = createAction<ErrorType>('setError');
