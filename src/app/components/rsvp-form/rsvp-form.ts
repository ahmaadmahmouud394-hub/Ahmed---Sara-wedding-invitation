import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './rsvp-form.html',
  styleUrl: './rsvp-form.scss'
})
export class RsvpForm {
  private toastService = inject(ToastService);

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const attendance = (form.elements.namedItem('attendance') as HTMLSelectElement).value;

    if (attendance === 'no') {
      this.toastService.show('We are so sorry you cannot make it. You will be missed! 😔', 'sad');
    } else {
      this.toastService.show('Thank you for your RSVP! We can\'t wait to celebrate with you! ✨', 'success');
    }
    
    form.reset();
  }
}
