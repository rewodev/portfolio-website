import { Component, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 're-wo-dev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostListener('scroll')
  onScroll() {
    console.log('scroll');
  }
}
