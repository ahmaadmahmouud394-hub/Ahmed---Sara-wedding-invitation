import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './event-details.html',
  styleUrl: './event-details.scss',
})
export class EventDetails {}
