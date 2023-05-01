import {City} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadNearOffers,
  loadOfferById,
  loadOfferReviews,
  loadOffers,
  setActiveOfferId,
  setCommentPostErrorStatus,
  setCommentPostingStatus,
  setCurrentOfferLoadingStatus,
  setError,
  setOffersLoadingStatus,
  setSortType,
} from './action';
import {State} from '../types/store';
import {INITIAL_SORT_TYPE} from '../constants';

const initialState: State = {
  city: City.Paris,
  activeOfferId: null,
  offers: [],
  isOffersLoading: false,

  currentOffer: null,
  currentOfferReviews: [],
  nearOffers: [],
  isCurrentOfferLoading: false,

  sortType: INITIAL_SORT_TYPE,

  isCommentPosting: false,
  isCommentPostError: false,

  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.currentOfferReviews = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setCommentPostingStatus, (state, action) => {
      state.isCommentPosting = action.payload;
    })
    .addCase(setCommentPostErrorStatus, (state, action) => {
      state.isCommentPostError = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
