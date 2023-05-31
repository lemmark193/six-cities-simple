import { DEFAULT_CITY, INITIAL_SORT_TYPE } from '../../constants';
import { City } from '../../mocks/offers';
import { DataMainProcessState } from '../../types/store';
import {changeCity, dataMainProcess} from './data-main-process';

describe('Reducer: dataMainProcess', () => {
  let state: DataMainProcessState;

  beforeEach(() => {
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
});
