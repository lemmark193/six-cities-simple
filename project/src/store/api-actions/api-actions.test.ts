import {createAPI} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute} from '../../data/constants';
import {checkAuthAction, fetchOffersAction, loginAction, logoutAction} from './api-actions';
import {AuthData} from '../../types/auth';
import {generateMockOffer} from '../../mocks/offers';

import type {Action} from 'redux';
import type {State} from '../../types/store';
import type {ThunkDispatch} from 'redux-thunk';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('checkAuthAction fullfilled test', async () => {
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []); // TODO: [] --- wtf?

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type as string);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type,
    ]);
  });

  it('loginAction fullfilled test', async () => {
    const FAKE_EMAIL = 'user@email.ru';
    const TOKEN = 'secret';
    const fakeUser: AuthData = {login: FAKE_EMAIL, password: 'password1'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {email: FAKE_EMAIL, token: TOKEN});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type as string);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type,
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-sities-token', TOKEN);
  });

  it('loginAction rejected test', async () => {
    const fakeUser: AuthData = {login: 'user@email.wrong', password: 'password1'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(400);

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type as string);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.rejected.type,
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(0);
  });

  it('fetchOffersAction fullfilled test', async () => {
    const fakeOffers = Array.from({length: 3}, generateMockOffer);

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, fakeOffers);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type as string);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });

  it('logoutAction fullfilled test', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type as string);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type,
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-sities-token');
  });
});
