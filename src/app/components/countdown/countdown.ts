import { Component, inject, OnInit, ElementRef } from '@angular/core';
import { CountdownService } from '../../services/countdown';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
})
export class Countdown implements OnInit {
  countdownService = inject(CountdownService);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Stagger each cell ring animation delay
    const rings = (this.el.nativeElement as HTMLElement).querySelectorAll('.cell-ring');
    rings.forEach((ring: any, i: number) => {
      (ring as HTMLElement).style.animationDelay = `${i * 0.2}s`;
    });
  }
}
