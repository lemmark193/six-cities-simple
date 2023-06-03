import { generateMockOffer, generateMockReviews } from '../../mocks/offers';
import { DataRoomProcessState, RoomData } from '../../types/store';
import { fetchOfferByIdAction, postReviewAction } from '../api-actions';
import { dataRoomProcess } from './data-room-process';

const fakeFetchOfferByIdActionPayload: RoomData = {
  offer: generateMockOffer(),
  reviews: generateMockReviews(),
  nearOffers: Array.from({length: 3}, generateMockOffer),
};

const fakeReviews = generateMockReviews();

describe('Reducer: dataRoomProcess', () => {
  let state: DataRoomProcessState;

  beforeEach(() => {
    state = {
      currentOffer: null,
      currentOfferReviews: [],
      nearOffers: [],
      isCurrentOfferLoading: false,
    };
  });

  it('without additional parameter should return initial state', () => {
    expect(dataRoomProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchOfferByIdAction test', () => {
    it('should update `isCurrentOfferLoading` to `true` if fetchOfferByIdAction pending', () => {
      expect(dataRoomProcess.reducer(state, {type: fetchOfferByIdAction.pending.type}))
        .toEqual({
          ...state,
          isCurrentOfferLoading: true,
        });
    });

    it(`should update \`isCurrentOfferLoading\` to \`false\`
      & should update \`currentOffer\`, \`currentOfferReviews\` and \`nearOffers\` by payload
      if fetchOffersAction fullfilled`, () => {
      const {offer, reviews, nearOffers} = fakeFetchOfferByIdActionPayload;

      expect(dataRoomProcess.reducer(state, {
        type: fetchOfferByIdAction.fulfilled.type,
        payload: fakeFetchOfferByIdActionPayload,
      }))
        .toEqual({
          ...state,
          isCurrentOfferLoading: false,
          currentOffer: offer,
          currentOfferReviews: reviews,
          nearOffers,
        });
    });

    it('should update `isCurrentOfferLoading` to `false` if fetchOfferByIdAction rejected', () => {
      expect(dataRoomProcess.reducer(state, {type: fetchOfferByIdAction.rejected.type}))
        .toEqual({
          ...state,
          isCurrentOfferLoading: false,
        });
    });
  });

  describe('postReviewAction test', () => {
    it('should update `currentOfferReviews` by payload if postReviewAction fullfilled', () => {
      expect(dataRoomProcess.reducer(state, {
        type: postReviewAction.fulfilled.type,
        payload: fakeReviews,
      }))
        .toEqual({
          ...state,
          currentOfferReviews: fakeReviews,
        });
    });
  });
});
