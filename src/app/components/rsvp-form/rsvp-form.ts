import { Component, inject, NgZone } from '@angular/core';
import emailjs from '@emailjs/browser';

import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ToastService } from '../../services/toast.service';

// ── EmailJS credentials ─────────────────────────────
const EMAILJS_PUBLIC_KEY = 'hDlQMaSVR9S660Xwz';
const EMAILJS_SERVICE_ID = 'service_025ox7h';
const EMAILJS_TEMPLATE_ID = 'template_19iwvx6';
// ───────────────────────────────────────────────────

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './rsvp-form.html',
  styleUrl: './rsvp-form.scss'
})
export class RsvpForm {
  private toastService = inject(ToastService);
  private zone = inject(NgZone);

  isSubmitting = false;

  async onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const fullName   = (form.elements.namedItem('name')       as HTMLInputElement).value;
    const attendance = (form.elements.namedItem('attendance') as HTMLSelectElement).value;
    const guests     = (form.elements.namedItem('guests')     as HTMLInputElement).value;
    const note       = (form.elements.namedItem('dietary')    as HTMLTextAreaElement).value;

    const templateParams = {
      full_name: fullName,
      attending: attendance === 'yes' ? 'Yes' : 'No',
      guests:    guests ? parseInt(guests, 10) : 1,
      note:      note || '—'
    };

    this.isSubmitting = true;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // emailjs resolves outside Angular's zone — zone.run() triggers change detection
      this.zone.run(() => {
        if (attendance === 'no') {
          this.toastService.show('We are so sorry you cannot make it. You will be missed! 😔', 'sad');
        } else {
          this.toastService.show("Thank you for your RSVP! We can't wait to celebrate with you! ✨", 'success');
        }
        form.reset();
        this.isSubmitting = false;
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      this.zone.run(() => {
        this.toastService.show('There was an issue sending your RSVP. Please try again.', 'error');
        this.isSubmitting = false;
      });
    }
  }
}