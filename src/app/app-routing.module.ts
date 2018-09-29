import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTwoPlusComponent } from './angular-two-plus/angular-two-plus.component';
import { AngularOnePlusComponent } from './angular-one-plus/angular-one-plus.component';

const routes: Routes = [
  { path: '', redirectTo: '/angulartowplus', pathMatch: 'full' },
  { path: 'angulartowplus', component: AngularTwoPlusComponent },
  { path: 'angularoneplus', component: AngularOnePlusComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
