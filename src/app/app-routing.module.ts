import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sing-in', component: SingInComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
