import {AuthStatus, StoreNameSpace} from '../../data/constants';
import {State, UserLogin} from '../../types/store';

export const getUser = (state: State): UserLogin =>
  state[StoreNameSpace.User].user;

export const getAuthStatus = (state: State): AuthStatus =>
  state[StoreNameSpace.User].authStatus;
