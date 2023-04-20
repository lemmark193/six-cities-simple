import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthStatus} from '../constants';
import {Offers} from '../types/offers';
import {loadOffers, requireAuth, setOffersLoadingStatus} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
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


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthStatus.NoAuth));
    }
  }
);
