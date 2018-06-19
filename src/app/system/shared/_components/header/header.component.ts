import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

import { UserService, 
         User, 
         AuthService } from '../../../../shared/index'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getUser();
  };

  private getUser(){
    this.userService.getUser()
      .pipe(first())
      .subscribe(
        data => {
          if (data){
            this.user = data;
          }
        },
        error => {
          console.log(error);
        });
  };

  private onLogout(){
    this.authService.logout()
    this.router.navigate(['/login']);
  };

}
