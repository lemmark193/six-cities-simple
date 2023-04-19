import {City} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setActiveOfferId, setOffersLoadingStatus} from './action';
import {State} from '../types/store';

const initialState: State = {
  city: City.Paris,
  activeOfferId: null,
  offers: [],
  isOffersLoading: false,
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
    });
});
