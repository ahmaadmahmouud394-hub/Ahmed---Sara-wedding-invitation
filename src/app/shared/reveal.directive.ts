import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('reveal') delay: string = '0ms';
  @Input('revealType') type: 'up' | 'left' | 'right' | 'scale' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.style.transitionDelay = this.delay;
    el.classList.add(`reveal-hidden-${this.type}`);

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          el.classList.remove(`reveal-hidden-${this.type}`);
          this.observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
