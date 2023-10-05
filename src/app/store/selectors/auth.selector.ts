import { createSelector } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';

export const selectAuth = (state: { auth: AuthState }) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: AuthState) => state.authenticated
);

export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);
