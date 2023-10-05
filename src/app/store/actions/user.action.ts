import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../models/auth-state.model';

export const setUser = createAction('[User] Set User', props<UserProfile>());

export const signUp = createAction('[User] signUp', props<UserProfile>());
