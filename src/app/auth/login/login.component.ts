import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Params, Router } from '@angular/router';

import { AuthService } from "../../shared/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private api: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  };

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    });
  };

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.api.login(this.f.email.value, this.f.password.value)
      .subscribe(
        data => {
          if (data){
            this.router.navigate(['/profile', 'main']);
          }
        },
        error => {
          console.log(error)
        });
  };
}
