import { NgModule } from '@angular/core';
import {PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {DahsboardComponent} from "./dahsboard/dahsboard.component";
import {UserComponent} from "./user/user.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserDetailsGuard} from "./user-details.guard";
import {UserDetailsUnsavedGuard} from "./user-details-unsaved.guard";
import {AdminGuard} from "./admin.guard";
import {UserDetailsResolver} from "./user-details.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DahsboardComponent
  },
  {
    path: 'user',
    component: UserComponent,
    // canActivateChild: [UserDetailsGuard],
    children: [
      {
        path: ':USER_ID', // wildcard
        component: UserDetailsComponent,
        canActivate: [UserDetailsGuard],
        canDeactivate: [UserDetailsUnsavedGuard],
        data: {
          title: 'This is user...'
        },
        resolve: {
          user: UserDetailsResolver
        }
      }
    ]
  },
  {
    path: 'admin',
    // canActivate: [AdminGuard],
    canLoad: [AdminGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(module => module.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
