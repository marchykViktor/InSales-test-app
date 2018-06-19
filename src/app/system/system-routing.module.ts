import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AutologinPageComponent } from './autologin-page/autologin-page.component';
import { AuthGuard } from '../shared/index';


const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
    {path: 'main', component: MainPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'autologin', component: AutologinPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
