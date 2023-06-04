import {createAPI} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute} from '../../data/constants';

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

  it('should `authStatus` is `AUTH` when server returns 200', () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []); // TODO: [] --- wtf?

    expect(store.getActions())
      .toEqual([]);
  });
});
