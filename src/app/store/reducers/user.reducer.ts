import { createReducer, on } from '@ngrx/store';
import { Role, UserProfile } from '../models/auth-state.model';
import { setUser } from '../actions/user.action';

const initialState: UserProfile = {
  id: 0,
  userName: '',
  email: '',
  role: Role.Admin,
};
export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action) => {
    return { ...state, ...action };
  })
);
