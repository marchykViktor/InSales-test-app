import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FilePageComponent } from './file-page/file-page.component';
import { AuthGuard } from '../shared/index';
import { ImportPageComponent } from './import-page/import-page.component';


const routes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      { path: 'main', component: MainPageComponent },
      { path: 'file', component: FilePageComponent },
      { path: 'settings', component: ImportPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
