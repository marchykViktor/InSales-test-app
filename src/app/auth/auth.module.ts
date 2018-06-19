import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthService, UserService } from "../shared/index";
import { AutologinComponent } from './autologin/autologin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [AuthService, UserService],
  declarations: [LoginComponent, RegistrationComponent, AuthComponent, AutologinComponent]
})
export class AuthModule { }
