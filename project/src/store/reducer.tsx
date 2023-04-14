import {City, offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveOfferId} from './action';
import {State} from '../types/store';

const initialState: State = {
  city: City.Paris,
  activeOfferId: null,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    });
});
