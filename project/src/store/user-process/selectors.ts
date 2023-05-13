import {AuthStatus, StoreNameSpace} from '../../constants';
import {State, User} from '../../types/store';

export const getUser = (state: State): User =>
  state[StoreNameSpace.User].user;

export const getAuthStatus = (state: State): AuthStatus =>
  state[StoreNameSpace.User].authStatus;
