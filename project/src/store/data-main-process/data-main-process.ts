import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {DEFAULT_CITY, INITIAL_SORT_TYPE, SortType, StoreNameSpace} from '../../data/constants';
import {fetchOffersAction} from '../api-actions';
import {ActiveOfferId, DataMainProcessState, ErrorType} from '../../types/store';
import {CityInfo} from '../../types/offers';

export const initialState: DataMainProcessState = {
  city: DEFAULT_CITY,
  activeOfferId: null,
  offers: [],
  isOffersLoading: false,
  sortType: INITIAL_SORT_TYPE,
  error: null,
};

export const dataMainProcess = createSlice({
  name: StoreNameSpace.DataMain,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityInfo>) {
      state.city = action.payload;
    },
    setActiveOfferId(state, action: PayloadAction<ActiveOfferId>) {
      state.activeOfferId = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    // TODO: проверить используется ли `action`
    setError(state, action: PayloadAction<ErrorType>) {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      });
  }
});

export const {
  changeCity,
  setActiveOfferId,
  setSortType,
  setError,
} = dataMainProcess.actions;
