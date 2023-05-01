import {createReducer} from '@reduxjs/toolkit';
import {
  loadNearOffers,
  loadOfferById,
  loadOfferReviews,
  setCommentPostErrorStatus,
  setCommentPostingStatus,
  setCurrentOfferLoadingStatus,
} from './action';
import {State} from '../types/store';

const initialState: State = {
  currentOffer: null,
  currentOfferReviews: [],
  nearOffers: [],
  isCurrentOfferLoading: false,

  isCommentPosting: false,
  isCommentPostError: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
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
    });
});
