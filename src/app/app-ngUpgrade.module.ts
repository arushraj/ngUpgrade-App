import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    UpgradeModule
  ],
  declarations: []
})
export class AppNgUpgradeModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap(angularModule): void {
    this.upgrade.bootstrap(document.body, [angularModule], { strictDi: true });
  }
}
