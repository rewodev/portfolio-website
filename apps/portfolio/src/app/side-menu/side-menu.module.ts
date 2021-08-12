import { LanguageSelectModule } from '@re-wo-dev/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuService } from './side-menu.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, RouterModule, TranslateModule, LanguageSelectModule],
  exports: [SideMenuComponent],
  providers: [SideMenuService]
})
export class SideMenuModule {}
