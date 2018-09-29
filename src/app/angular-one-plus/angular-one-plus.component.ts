import { Component, OnInit } from '@angular/core';
import { AppNgUpgradeModule } from '../app-ngUpgrade.module';

@Component({
  selector: 'app-angular-one-plus',
  templateUrl: './angular-one-plus.component.html',
  styleUrls: ['./angular-one-plus.component.css']
})
export class AngularOnePlusComponent implements OnInit {

  constructor(private ngUpgrade: AppNgUpgradeModule) { }

  ngOnInit() {
    this.ngUpgrade.ngDoBootstrap('myApp');
  }

}
