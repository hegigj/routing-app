import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {OnEdit} from "./on-edit";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsUnsavedGuard implements CanDeactivate<OnEdit> {
  canDeactivate(component: OnEdit, currentRoute: ActivatedRouteSnapshot): boolean {
    if (component.isDirty) {
      return confirm('Are you sure you want to leave?');
    }

    return true;
  }
}
