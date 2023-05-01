import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {ActiveOfferId, CommentPostErrorStatus, CommentPostingStatus, LoadingStatus} from '../types/store';

export const setActiveOfferId = createAction<ActiveOfferId>('setActiveOfferId');

export const loadOfferById = createAction<Offer>('loadOfferById');

export const loadOfferReviews = createAction<Reviews>('loadOfferReviews');

export const loadNearOffers = createAction<Offers>('loadNearOffers');

export const setCurrentOfferLoadingStatus = createAction<LoadingStatus>('setCurrentOfferLoadingStatus');

export const setCommentPostingStatus = createAction<CommentPostingStatus>('setCommentPostingStatus');

export const setCommentPostErrorStatus = createAction<CommentPostErrorStatus>('setCommentPostErrorStatus');
