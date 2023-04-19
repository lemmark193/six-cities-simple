import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../constants';
import {Offers} from '../types/offers';
import {loadOffers, setOffersLoadingStatus} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    // TODO: Удалить закомментированный код
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    // setTimeout(async () => {
    //   const {data} = await api.get<Offers>(APIRoute.Offers);

    //   dispatch(loadOffers(data));
    //   dispatch(setOffersLoadingStatus(false));
    // }, 4000);

    const {data} = await api.get<Offers>(APIRoute.Offers);

    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
  },
);
