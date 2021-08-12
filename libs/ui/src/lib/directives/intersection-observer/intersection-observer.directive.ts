import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fromIntersectionObserver } from './from-intersection-observer';
import { IntersectionStatus } from './intersection-status.enum';

/**
 * Directive for using intersection observers.
 */
@Directive({
  selector: '[reWoDevIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot!: HTMLElement;
  @Input() intersectionThreshold!: number | number[];
  @Input() intersectionClass!: string;
  @Input() intersectionApplyClassOnce = true;
  @Input() intersectionStyle!: any;

  @Output() visibilityChange = new EventEmitter<IntersectionStatus>();

  private destroy$ = new Subject();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const element = this.element.nativeElement;
    const config = {
      root: this.intersectionRoot,
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold
    };

    fromIntersectionObserver(element, config, this.intersectionDebounce)
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.visibilityChange.emit(status);

        if (this.intersectionClass) {
          if (status == IntersectionStatus.Visible) {
            this.element.nativeElement.classList.add(this.intersectionClass);
          } else if (!this.intersectionApplyClassOnce && status == IntersectionStatus.NotVisible) {
            this.element.nativeElement.classList.remove(this.intersectionClass);
          }
        }
        if (this.intersectionStyle) {
          Object.keys(this.intersectionStyle).forEach((style) => (this.element.nativeElement.style[style] = this.intersectionStyle[style]));
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
