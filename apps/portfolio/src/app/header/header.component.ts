import { Component } from '@angular/core';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 're-wo-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLang!: string;

  constructor(public sideMenuService: SideMenuService) {}

  toggleMenu() {
    this.sideMenuService.toggle();
  }

  copy() {
    navigator.clipboard.writeText('hello@re-wo-dev.com');
  }
}
