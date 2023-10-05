import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signUp, setUser } from '../actions/user.action';
import { map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { setAuthentication, setToken } from '../actions/auth.action';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  signUp = createEffect(() =>
    this.action$.pipe(
      ofType(signUp),
      switchMap((action) => {
        return this.authService.signUp({ ...action }).pipe(
          switchMap((response) => {
            this.router.navigate(['/dashboard']);
            return of(
              setUser(response.user),
              setToken({ token: response.token, authenticated: true })
            );
          })
        );
      })
    )
  );
}
