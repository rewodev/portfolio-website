import { Component } from '@angular/core';

/**
 * Component for displaying the intro page/section.
 */
@Component({
  selector: 're-wo-dev-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  /**
   * The list of typewriting texts.
   */
  texts = ['intro.texts.web-developer', 'intro.texts.programmer', 'intro.texts.freelancer'];

  /**
   * Scrolls to the about page on button click.
   */
  scrollToPage() {
    const el = <HTMLElement>document.getElementsByTagName('re-wo-dev-about').item(0);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
