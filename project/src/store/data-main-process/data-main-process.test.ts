import { DEFAULT_CITY, INITIAL_SORT_TYPE } from '../../constants';
import { City, generateMockOffer } from '../../mocks/offers';
import { Offers } from '../../types/offers';
import { DataMainProcessState } from '../../types/store';
import { fetchOffersAction } from '../api-actions';
import {changeCity, dataMainProcess} from './data-main-process';

const fakeOffers: Offers = Array.from({length: 3}, generateMockOffer);

describe('Reducer: dataMainProcess', () => {
  let state: DataMainProcessState;

  // TODO: изменение полей после тестов / afterEach
  beforeEach(() => {
    // console.log(state)
    state = {
      city: DEFAULT_CITY,
      activeOfferId: null,
      offers: [],
      isOffersLoading: false,
      sortType: INITIAL_SORT_TYPE,
      error: null,
    };
  });

  it('without additional parameter should return initial state', () => {
    expect(dataMainProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('changeCity action test', () => {
    it('should change `city` for given value', () => {
      expect(dataMainProcess.reducer(state, changeCity(City.Amsterdam)))
        .toEqual({
          ...state,
          city: City.Amsterdam,
        });
    });
  });

  describe('fetchOffersAction test', () => {
    it('should update `isOffersLoading` to `true` if fetchOffersAction pending', () => {
      expect(dataMainProcess.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({
          ...state,
          isOffersLoading: true,
        });
    });

    it(`should update \`isOffersLoading\` to \`false\`
      & should update \`isOffersLoading\` to payload value
      if fetchOffersAction fullfilled`, () => {
      expect(dataMainProcess.reducer(state, {
        type: fetchOffersAction.fulfilled.type,
        payload: fakeOffers,
      }))
        .toEqual({
          ...state,
          offers: fakeOffers,
          isOffersLoading: false,
        });
    });

    it('should update `isOffersLoading` to `false` if fetchOffersAction rejected', () => {
      expect(dataMainProcess.reducer(state, {type: fetchOffersAction.rejected.type}))
        .toEqual({
          ...state,
          isOffersLoading: false,
        });
    });
  });
});
