import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/user-storage.service';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isUserLoggedIn: boolean = UserStorageService.hasToken();

  //isAdmin:boolean;

  isAdmin:string = localStorage.getItem('isAdmin');

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isUserLoggedIn = UserStorageService.hasToken();

      }
    })
  }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
    localStorage.removeItem('isAdmin')
  }

}