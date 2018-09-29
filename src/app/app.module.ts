import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularTwoPlusComponent } from './angular-two-plus/angular-two-plus.component';
import { AppNgUpgradeModule } from './app-ngUpgrade.module';
import { AngularOnePlusComponent } from './angular-one-plus/angular-one-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularTwoPlusComponent,
    AngularOnePlusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppNgUpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
