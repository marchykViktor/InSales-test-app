import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SystemRoutingModule } from './system-routing.module';
import { HeaderComponent } from './shared/_components/header/header.component';
import { SidebarComponent } from './shared/_components/sidebar/sidebar.component';
import { DropdownDirective } from './shared/_directives/dropdown.directive';
import { FilePageComponent } from './file-page/file-page.component';
import { DynamicFormService } from './shared/_services/dynamic-form.service';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ImportPageComponent } from './import-page/import-page.component';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [DynamicFormService],
  declarations: [MainPageComponent, SystemComponent, HeaderComponent, SidebarComponent, DropdownDirective, FilePageComponent, ImportPageComponent]
})
export class SystemModule { }
