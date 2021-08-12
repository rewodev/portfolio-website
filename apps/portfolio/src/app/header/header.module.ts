import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectModule } from '@re-wo-dev/ui';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, TranslateModule, LanguageSelectModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
