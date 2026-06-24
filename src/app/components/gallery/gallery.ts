import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  lang = inject(LangService);
}
