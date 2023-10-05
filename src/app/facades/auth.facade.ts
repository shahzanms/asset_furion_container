import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { authenticate, init } from '../store/actions/auth.action';
import {
  selectAuth,
  selectIsLoggedIn,
  selectToken,
} from '../store/selectors/auth.selector';
import { AuthState } from '../store/models/auth-state.model';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private store: Store<{ auth: AuthState }>) {}

  authState$ = this.store.select(selectAuth);
  isLoggedIn$ = this.store.select(selectIsLoggedIn);
  authToken$ = this.store.select(selectToken);

  init() {
    this.store.dispatch(init());
  }

  authenticate(userName: string, password: string) {
    this.store.dispatch(authenticate({ userName, password }));
  }

  getAuth() {
    return this.authToken$;
  }

  getIsLoggedIn() {
    return this.isLoggedIn$;
  }
}
