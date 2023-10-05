import { createReducer, on } from '@ngrx/store';
import { setAuthentication } from '../actions/auth.action';
import { AuthState } from '../models/auth-state.model';

const initialAuthState: AuthState = {
  authenticated: false,
  token: '',
};

export const authReducer = createReducer(
  initialAuthState,
  on(setAuthentication, (state, action) => {
    return {
      ...state,
      authenticated: action.authenticated,
      token: action.token,
    };
  })
);
