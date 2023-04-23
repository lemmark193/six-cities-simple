import {City} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadNearOffers,
  loadOfferById,
  loadOfferReviews,
  loadOffers,
  requireAuth,
  setActiveOfferId,
  setCurrentOfferLoadingStatus,
  setOffersLoadingStatus
} from './action';
import {State} from '../types/store';
import {AuthStatus} from '../constants';

const initialState: State = {
  city: City.Paris,
  activeOfferId: null,
  offers: [],
  isOffersLoading: false,

  currentOffer: null,
  currentOfferReviews: [],
  nearOffers: [],
  isCurrentOfferLoading: false,

  authStatus: AuthStatus.Unknown,
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
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    });
});
