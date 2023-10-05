import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { UserProfile } from '../store/models/auth-state.model';
import { signUp } from '../store/actions/user.action';
import {
  selectUserName,
  selectUserProfile,
} from '../store/selectors/user.selector';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  constructor(private store: Store<{ user: UserProfile }>) {}

  signUp(userData: UserProfile) {
    this.store.dispatch(signUp(userData));
  }

  getUser() {
    return this.store.select(selectUserProfile);
  }

  getUserName() {
    return this.store.select(selectUserName);
  }
}
