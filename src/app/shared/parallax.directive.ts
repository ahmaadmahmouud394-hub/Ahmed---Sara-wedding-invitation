import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[parallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit {
  @Input('parallaxSpeed') speed: number = 0.2;
  @Input('parallaxDirection') direction: 'vertical' | 'horizontal' = 'vertical';

  private initialOffset: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initialOffset = this.el.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const offset = scrollPosition * this.speed;
    
    if (this.direction === 'vertical') {
      this.el.nativeElement.style.transform = `translateY(${offset}px)`;
    } else {
      this.el.nativeElement.style.transform = `translateX(${offset}px)`;
    }
  }
}
