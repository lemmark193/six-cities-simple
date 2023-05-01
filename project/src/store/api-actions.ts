import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, ERROR_MESSAGE_TIMEOUT} from '../constants';
import {
  loadNearOffers,
  loadOfferById,
  loadOfferReviews,
  setCommentPostErrorStatus,
  setCommentPostingStatus,
  setCurrentOfferLoadingStatus,
} from './action';
import {setError} from './data-main-process/data-main-process';
import {store} from './store';
import {removeToken, saveToken} from '../services/token';
import {Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {AppDispatch, State, User} from '../types/store';
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

export const fetchOfferByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferById',
  async (id, {dispatch, extra: api}) => {
    dispatch(setCurrentOfferLoadingStatus(true));

    try {
      const [offer, reviews, nearOffers] = await Promise.all([
        api.get<Offer>(`${APIRoute.Offers}/${id}`),
        api.get<Reviews>(`${APIRoute.Reviews}/${id}`),
        api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`),
      ]);

      dispatch(loadOfferById(offer.data));
      dispatch(loadOfferReviews(reviews.data));
      dispatch(loadNearOffers(nearOffers.data));
    } catch(error) {
      if (error instanceof Error) {
        throw error;
      }
    } finally {
      dispatch(setCurrentOfferLoadingStatus(false));
    }
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
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
  },
);

export const postReviewAction = createAsyncThunk<void, {
  id: number;
  reviewState: ReviewState;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postReview',
  async ({id, reviewState}, {dispatch, extra: api}) => {
    dispatch(setCommentPostingStatus(true));

    try {
      await api.post(`${APIRoute.Reviews}/${id}`, reviewState);

      const reviews = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);

      dispatch(loadOfferReviews(reviews.data));
      dispatch(setCommentPostErrorStatus(false));
    } catch (error) {
      dispatch(setCommentPostErrorStatus(true));
    } finally {
      dispatch(setCommentPostingStatus(false));
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(() => {
      store.dispatch(setError(null));
    }, ERROR_MESSAGE_TIMEOUT);
  },
);
