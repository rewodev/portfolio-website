import { AfterViewInit, Component } from '@angular/core';
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
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(({ section }) => {
      if (section) {
        (<HTMLElement>document.querySelector(`re-wo-dev-${section}`)).scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
