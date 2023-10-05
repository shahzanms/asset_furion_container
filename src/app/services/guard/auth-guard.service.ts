import { AuthFacade } from 'src/app/facades/auth.facade';
import { pipe, map } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';

export const canActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  return authFacade.getIsLoggedIn().pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        router.navigate(['dashboard']);
        return false;
      } else {
        return true;
      }
    })
  );
};

export const canActivateDashboard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  return authFacade.getIsLoggedIn().pipe(
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    })
  );
};
