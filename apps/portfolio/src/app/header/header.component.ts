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

  constructor(public sideMenuService: SideMenuService) {}

  toggleMenu() {
    this.sideMenuService.toggle();
  }

  copy() {
    navigator.clipboard.writeText('hello@re-wo-dev.com');

    this.copyPending = 'appear';
    timer(1000).subscribe(() => (this.copyPending = 'ready'));
  }
}
