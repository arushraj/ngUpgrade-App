import { AppNgUpgradeModule } from './app-ngUpgrade.module';
import { UpgradeModule } from '@angular/upgrade/static';

describe('AppNgUpgradeModule', () => {
  let appNgUpgradeModule: AppNgUpgradeModule;
  let upgrade: UpgradeModule;

  beforeEach(() => {
    appNgUpgradeModule = new AppNgUpgradeModule(upgrade);
  });

  it('should create an instance', () => {
    expect(appNgUpgradeModule).toBeTruthy();
  });
});
