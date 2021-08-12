import { EventEmitter } from '@angular/core';
import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Directive for applying a typewriter effect.
 */
@Directive({
  selector: '[reWoDevTypewriter]'
})
export class TypewriterDirective {
  private textIdx = 0;

  /**
   * The texts to display.
   */
  @Input() reWoDevTypewriter!: string[];

  /**
   * Event which is triggered on the end of the animation.
   */
  @Output() typewriterEnded = new EventEmitter<boolean>();

  /**
   * The replay class binding.
   */
  @HostBinding('class.replay') replay = false;

  /**
   * The displayed text binding.
   */
  @HostBinding('innerHTML') get text() {
    return this.translate.instant(this.reWoDevTypewriter[this.textIdx]);
  }

  /**
   * The listener for the animation-end event.
   * Resets the animation if one ended.
   */
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
    }, 1900);
  }

  constructor(private translate: TranslateService) {}
}
