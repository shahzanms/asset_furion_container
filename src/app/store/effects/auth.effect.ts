import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  authenticate,
  init,
  setAuthentication,
  setToken,
} from '../actions/auth.action';
import { tap, map, of, switchMap, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  authenticate = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticate),
      switchMap((action) => {
        return this.authService.login(action.userName, action.password).pipe(
          map((response) => {
            localStorage.setItem('token', response.token.toString());
            this.router.navigate(['/dashboard']);
            return setAuthentication({
              token: response.token as string,
              authenticated: response.success,
            });
          }),
          catchError((err) => {
            return of(setAuthentication({ token: '', authenticated: false }));
          })
        );
      })
    )
  );

  setToken = createEffect(() =>
    this.actions$.pipe(
      ofType(setToken),
      switchMap((action) => {
        localStorage.setItem('token', action.token);
        return of(
          setAuthentication({ token: action.token, authenticated: true })
        );
      })
    )
  );

  loadAuth = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
          return of(
            setAuthentication({ token: authToken, authenticated: true })
          );
        }
        return of(setAuthentication({ token: '', authenticated: false }));
      })
    )
  );
}
