import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 're-wo-dev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public sideMenuService: SideMenuService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.sideMenuService.toggle();
  }

  copy() {
    navigator.clipboard.writeText('hello@re-wo-dev.com');
  }
}
