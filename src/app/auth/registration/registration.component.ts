import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from '../../shared/index';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { };

  ngOnInit() {
    this.createForm();
  };

  get f() { return this.registrationForm.controls; }

  createForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl
    });
  };

  onSubmit() {
    this.userService.newUser({ name: this.f.name.value, email: this.f.email.value, password: this.f.password.value })
      .pipe(first())
      .subscribe(
        data => {
          if (data){
            this.router.navigate(['/login']);
          }
        },
        error => {
          console.log(error)
        });
  };
}
