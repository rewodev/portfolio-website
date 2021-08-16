import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

/**
 * Main view component for displaying the site layout.
 */
@Component({
  selector: 're-wo-dev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(({ section }) => {
      if (section) {
        const el = <HTMLElement>document.querySelector(`re-wo-dev-${section}`);
        window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
        this.router.navigate([], { queryParams: { section: null } });
      }
    });
  }
}
