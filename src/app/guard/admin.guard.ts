import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserStorageService } from 'src/app/services/user-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router,
    private notification: NzNotificationService,) { }


    admin:boolean;
    isAdmin = localStorage.getItem('isAdmin')

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    if (!UserStorageService.hasToken() && localStorage.getItem('isAdmin')==='no') {
      //UserStorageService.signOut();
      //this.router.navigateByUrl('/login');
      this.notification
        .error(
          'ERROR',
          `You Are Not LoggedIn As Admin. Please Login First As Admin!!!`,
          { nzDuration: 5000 }
        );
      return false;
    }
    else if(UserStorageService.hasToken() && localStorage.getItem('isAdmin')==='no') {
      //UserStorageService.signOut();
      //this.router.navigateByUrl('/login');
      this.notification
        .error(
          'ERROR',
          `You Are Not LoggedIn As Admin. Please Login First As Admin!!!`,
          { nzDuration: 5000 }
        );
        return false;
    }
    else if(!UserStorageService.hasToken() && localStorage.getItem('isAdmin')===null) {
      //UserStorageService.signOut()
      //this.router.navigateByUrl('/login');
      this.notification
        .error(
          'ERROR',
          `You Are Not LoggedIn As Admin. Please Login First As Admin!!!`,
          { nzDuration: 5000 }
        );
        return false;
    }
    return true;
  }
  
}
