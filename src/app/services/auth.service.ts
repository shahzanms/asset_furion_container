import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Role, UserProfile } from '../store/models/auth-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userProfile: UserProfile = {
    id: 1,
    userName: 'tom',
    email: 'tom@abc.com',
    password: 'XXXXXX',
    role: Role.Admin,
  };

  login(userName: string, password: string) {
    let response;
    if (userName === 'admin' && password === 'admin') {
      response = {
        success: true,
        token: 'admin',
        message: 'Success',
      };
    } else {
      response = {
        success: false,
        token: '',
        message: 'Invalid Credentials',
      };
    }
    return of(response).pipe(delay(1000));
  }

  signUp(userProfile: UserProfile) {
    return of({
      user: this.userProfile,
      token: 'admin',
      message: 'Success',
    }).pipe(delay(1000));
  }

  getUser() {
    return of(this.userProfile).pipe(delay(1000));
  }
}
