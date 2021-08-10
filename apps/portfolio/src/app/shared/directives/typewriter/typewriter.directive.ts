import { EventEmitter } from '@angular/core';
import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Directive({
  selector: '[reWoDevTypewriter]'
})
export class TypewriterDirective {
  private textIdx = 0;

  @Input() reWoDevTypewriter!: string[];
  @Output() typewriterEnded = new EventEmitter<boolean>();

  @HostListener('animationend')
  onAnimationEnd() {
    if (this.textIdx == this.reWoDevTypewriter.length - 1) {
      this.typewriterEnded.emit(true);
      return;
    }
    setTimeout(() => {
      this.replay = true;
      setTimeout(() => {
        this.textIdx++;
        this.replay = false;
      }, 100);
    }, 2500);
  }

  @HostBinding('class.replay') replay = false;

  @HostBinding('innerHTML') get text() {
    return this.translate.instant(this.reWoDevTypewriter[this.textIdx]);
  }

  constructor(private translate: TranslateService) {}
}
