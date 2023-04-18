import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../constants';
import {Offers} from '../types/offers';
import {loadOffers} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    // eslint-disable-next-line
    console.log('fetch');
    const {data} = await api.get<Offers>(APIRoute.Offers);
    // eslint-disable-next-line
    console.log('data');
    dispatch(loadOffers(data));
  },
);
