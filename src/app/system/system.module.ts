import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SystemRoutingModule } from './system-routing.module';
import { HeaderComponent } from './shared/_components/header/header.component';
import { SidebarComponent } from './shared/_components/sidebar/sidebar.component';
import { DropdownDirective } from './shared/_directives/dropdown.directive';
import { SettingsPageComponent } from './settings-page/settings-page.component';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MainPageComponent, SystemComponent, HeaderComponent, SidebarComponent, DropdownDirective, SettingsPageComponent]
})
export class SystemModule { }
