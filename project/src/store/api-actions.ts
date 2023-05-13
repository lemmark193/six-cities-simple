import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../constants';
import {removeToken, saveToken} from '../services/token';
import {Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {AppDispatch, RoomData, State, User} from '../types/store';
import {AuthData, UserData} from '../types/auth';
import {ReviewState} from '../types/review-form';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<RoomData, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferById',
  async (id, {extra: api}) => {
    const [offer, reviews, nearOffers] = await Promise.all([
      api.get<Offer>(`${APIRoute.Offers}/${id}`),
      api.get<Reviews>(`${APIRoute.Reviews}/${id}`),
      api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`),
    ]);

    return {
      offer: offer.data,
      reviews: reviews.data,
      nearOffers: nearOffers.data,
    };
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    const {data: {email}} = await api.get<UserData>(APIRoute.Login);

    return email;
  },
);

export const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(
      APIRoute.Login,
      {email: login, password},
    );
    const {token, email} = data;

    saveToken(token);

    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
  },
);

export const postReviewAction = createAsyncThunk<Reviews, {
  id: number;
  reviewState: ReviewState;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postReview',
  async ({id, reviewState}, {extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, reviewState);

    const {data: reviews} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);

    return reviews;
  },
);
