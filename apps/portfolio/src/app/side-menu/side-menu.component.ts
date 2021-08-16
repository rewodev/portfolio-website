import { Component } from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { MenuItem } from '@re-wo-dev/model';
import { Router } from '@angular/router';

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
    { label: 'menu.home', section: 'intro' },
    { label: 'menu.about', section: 'about' },
    { label: 'menu.services', section: 'services' },
    { label: 'menu.imprint', section: '/imprint' }
    // { label: 'menu.contact', section: 'contact }
  ];

  /**
   * Observable of the visible state of the side menu.
   */
  visible$ = this.sideMenuService.visible$;

  constructor(private sideMenuService: SideMenuService, private router: Router) {}

  /**
   * Scrolls to the given section of the page.
   * @param section The section name.
   */
  goTo(section: string) {
    this.sideMenuService.hide();
    if (section.startsWith('/')) {
      this.router.navigate([section]);
    } else {
      const queryParams = section ? { queryParams: { section: section } } : undefined;
      this.router.navigate(['/'], queryParams);
    }
  }
}
