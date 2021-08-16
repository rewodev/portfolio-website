import { Component } from '@angular/core';
import { of, timer } from 'rxjs';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 're-wo-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLang!: string;
  copyPending = '';

  get darkMode() {
    return !document.querySelector('body')?.classList.contains('light');
  }

  constructor(public sideMenuService: SideMenuService) {}

  /**
   * Toggles the side menu.
   */
  toggleMenu() {
    this.sideMenuService.toggle();
  }

  /**
   * Copies the mail address to the clipboard.
   */
  copy() {
    navigator.clipboard.writeText('hello@re-wo-dev.com');

    this.copyPending = 'appear';
    timer(1000).subscribe(() => (this.copyPending = 'ready'));
  }

  toggleMode() {
    document.querySelector('body')?.classList.toggle('light');
  }
}
