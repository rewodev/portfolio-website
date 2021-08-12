import { Component } from '@angular/core';

@Component({
  selector: 're-wo-dev-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  texts = ['intro.texts.web-developer', 'intro.texts.programmer', 'intro.texts.freelancer'];

  showBtn = false;

  scrollToPage() {
    const el = <HTMLElement>document.getElementsByTagName('re-wo-dev-about').item(0);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
