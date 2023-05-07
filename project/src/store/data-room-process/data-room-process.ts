import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {DataRoomProcessState, RoomData} from '../../types/store';
import {StoreNameSpace} from '../../constants';
import {fetchOfferByIdAction, postReviewAction} from '../api-actions';
import {Reviews} from '../../types/reviews';

const initialState: DataRoomProcessState = {
  currentOffer: null,
  currentOfferReviews: [],
  nearOffers: [],
  isCurrentOfferLoading: false,
};

export const dataRoomProcess = createSlice({
  name: StoreNameSpace.DataMain,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action: PayloadAction<RoomData>) => {
        const {offer, reviews, nearOffers} = action.payload;

        state.currentOffer = offer;
        state.currentOfferReviews = reviews;
        state.nearOffers = nearOffers;

        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isCurrentOfferLoading = false;
      })
      .addCase(postReviewAction.fulfilled, (state, action: PayloadAction<Reviews>) => {
        state.currentOfferReviews = action.payload;
      });
  },
});
