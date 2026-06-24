import { Component, OnInit, OnDestroy, ElementRef, HostListener, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  lang = inject(LangService);

  private frame = 0;
  private mouseX = 0;
  private mouseY = 0;
  private ticking = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateFloatingPetals();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.applyParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  private applyParallax() {
    const host = this.el.nativeElement as HTMLElement;
    const orb1 = host.querySelector<HTMLElement>('.orb-1');
    const orb2 = host.querySelector<HTMLElement>('.orb-2');
    const content = host.querySelector<HTMLElement>('.hero-content');

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (this.mouseX - cx) / cx;
    const dy = (this.mouseY - cy) / cy;

    if (orb1) orb1.style.transform = `translate(${dx * 30}px, ${dy * 20}px)`;
    if (orb2) orb2.style.transform = `translate(${-dx * 20}px, ${-dy * 15}px)`;
    if (content) content.style.transform = `translate(${dx * 6}px, ${dy * 4}px)`;
  }

  private animateFloatingPetals() {
    // No-op placeholder; petals are CSS animated
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frame);
  }
}
