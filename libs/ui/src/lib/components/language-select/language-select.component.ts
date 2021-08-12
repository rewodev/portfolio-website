import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component for displaying the language selection.
 */
@Component({
  selector: 're-wo-dev-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  /**
   * The current language set.
   */
  currentLang = this.translate.getDefaultLang();

  constructor(private translate: TranslateService) {}

  /**
   * Changes the current language.
   * @param lang The language to set.
   */
  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.currentLang = lang;
  }
}
