import { Component } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { MenuItem } from '@re-wo-dev/model';

/**
 * Component for displaying the side menu page/section.
 */
@Component({
  selector: 're-wo-dev-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  /**
   * The list of menu items.
   */
  menuItems: MenuItem[] = [
    { label: 'menu.home', componentName: 're-wo-dev-intro', link: '/' },
    { label: 'menu.about', componentName: 're-wo-dev-about', link: '/about' },
    { label: 'menu.services', componentName: 're-wo-dev-services', link: '/services' }
    // { label: 'menu.contact', componentName: 're-wo-dev-contact', link: '/contact' }
  ];

  /**
   * Observable of the visible state of the side menu.
   */
  visible$ = this.sideMenuService.visible$;

  constructor(private sideMenuService: SideMenuService) {}

  /**
   * Scrolls to the given section of the page.
   * @param componentName The component name.
   */
  scrollToPage(componentName: string) {
    (<HTMLElement>document.getElementsByTagName(componentName)[0]).scrollIntoView({ behavior: 'smooth' });
    this.sideMenuService.hide();
  }
}
