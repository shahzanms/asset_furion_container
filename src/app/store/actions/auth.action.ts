import { createAction, props } from '@ngrx/store';
import { AuthState, UserCredentials } from '../models/auth-state.model';

export const AUTHENTICATE = '[Authenticate] Authenticate';
export const SET_AUTHENTICATE = '[Authenticate] SetAuthenticate';
export const SET_TOKEN = '[Authenticate] SetToken';
export const INIT = '[Authenticate] Init';

export const setAuthentication = createAction(
  SET_AUTHENTICATE,
  props<AuthState>()
);

export const setToken = createAction(SET_TOKEN, props<AuthState>());

export const authenticate = createAction(
  AUTHENTICATE,
  props<UserCredentials>()
);
export const init = createAction(INIT);
