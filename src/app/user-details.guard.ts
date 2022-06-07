import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const paramMap = route.paramMap;

    if (paramMap.has('USER_ID')) {
      const id: number = +(paramMap.get('USER_ID') as string);

      return !!id;
    }

    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    const paramMap = childRoute.paramMap;

    if (paramMap.has('USER_ID')) {
      const id: number = +(paramMap.get('USER_ID') as string);

      return !!id;
    }

    return false;
  }
}
