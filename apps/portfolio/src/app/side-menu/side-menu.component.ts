import { Component } from '@angular/core';
import { SideMenuService } from './side-menu.service';

export interface MenuItem {
  label: string;
  name: string;
  link: string;
}

@Component({
  selector: 're-wo-dev-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    { label: 'menu.home', name: 're-wo-dev-intro', link: '/' },
    { label: 'menu.about', name: 're-wo-dev-about', link: '/about' },
    { label: 'menu.services', name: 're-wo-dev-services', link: '/services' },
    { label: 'menu.contact', name: 're-wo-dev-contact', link: '/contact' }
  ];

  visible$ = this.sideMenuService.visible$;

  constructor(private sideMenuService: SideMenuService) {}

  scrollToPage(name: string) {
    (<HTMLElement>document.getElementsByTagName(name)[0]).scrollIntoView({ behavior: 'smooth' });
    this.sideMenuService.hide();
  }
}
