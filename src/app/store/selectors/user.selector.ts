import { createSelector } from '@ngrx/store';
import { UserProfile } from '../models/auth-state.model';

export const selectUserProfile = (state: { user: UserProfile }) => state.user;

export const selectUserName = createSelector(
  selectUserProfile,
  (userProfile: UserProfile) => userProfile.userName
);

export const selectUserRole = createSelector(
  selectUserProfile,
  (userProfile: UserProfile) => userProfile.role
);
