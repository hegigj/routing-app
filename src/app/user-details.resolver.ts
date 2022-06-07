import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./user.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<UserModel> {
  constructor(private httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
    const id: number = +(route.paramMap.get('USER_ID') as string);

    return this.httpClient.get<UserModel>(`${environment.baseUrl}/users/${id}`);
  }
}
