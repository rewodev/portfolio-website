import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 're-wo-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang!: string;

  constructor(public sideMenuService: SideMenuService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.getDefaultLang();
  }

  toggleMenu() {
    this.sideMenuService.toggle();
  }

  copy() {
    navigator.clipboard.writeText('hello@re-wo-dev.com');
  }

  changeLanguage() {
    const lang = this.translate.getDefaultLang() === 'en' ? 'de' : 'en';
    this.translate.setDefaultLang(lang);
    this.currentLang = lang;
  }
}
