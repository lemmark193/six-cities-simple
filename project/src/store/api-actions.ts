import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthStatus, ERROR_MESSAGE_TIMEOUT} from '../constants';
import {
  deleteUser,
  loadUser,
  loadNearOffers,
  loadOfferById,
  loadOfferReviews,
  loadOffers,
  requireAuth,
  setCommentPostErrorStatus,
  setCommentPostingStatus,
  setCurrentOfferLoadingStatus,
  setOffersLoadingStatus,
  setError,
} from './action';
import {store} from './store';
import {removeToken, saveToken} from '../services/token';
import {Offer, Offers} from '../types/offers';
import {Reviews} from '../types/reviews';
import {AppDispatch, State} from '../types/store';
import {AuthData, UserData} from '../types/auth';
import {ReveiwState} from '../types/review-form';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    const {data} = await api.get<Offers>(APIRoute.Offers);

    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {email}} = await api.get<UserData>(APIRoute.Login);

      dispatch(requireAuth(AuthStatus.Auth));
      dispatch(loadUser(email));
    } catch {
      dispatch(requireAuth(AuthStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(
      APIRoute.Login,
      {email: login, password},
    );
    const {token, email} = data;

    saveToken(token);

    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(loadUser(email));
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

    dispatch(requireAuth(AuthStatus.NoAuth));
    dispatch(deleteUser());
  },
);

export const postReviewAction = createAsyncThunk<void, {
  id: number;
  reviewState: ReveiwState;
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
