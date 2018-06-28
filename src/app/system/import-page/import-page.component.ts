import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../shared/index';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.scss']
})
export class ImportPageComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.setUser()
  }

  setUser() {
    this.userService.getUser()
      .subscribe(
        data => {
          if (data) {
            this.user = data.user;
            console.log(this.user)
          }
        },
        error => {
          console.log(error)
        });
  };

}
