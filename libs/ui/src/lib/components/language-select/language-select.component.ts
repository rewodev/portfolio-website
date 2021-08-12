import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 're-wo-dev-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  currentLang = this.translate.getDefaultLang();

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.currentLang = lang;
  }
}
