import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideMenuService {
  private visibleSubject = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSubject.asObservable();

  show() {
    this.visibleSubject.next(true);
  }

  hide() {
    this.visibleSubject.next(false);
  }

  toggle() {
    this.visibleSubject.next(!this.visibleSubject.value);
  }
}
