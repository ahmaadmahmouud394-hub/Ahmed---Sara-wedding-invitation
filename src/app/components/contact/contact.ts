import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  lang = inject(LangService);
}
