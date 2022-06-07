import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  canActivate(): boolean {
    return false;
  }

  canLoad(): boolean {
    return false;
  }
}
