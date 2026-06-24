import { Component, inject, NgZone } from '@angular/core';
import emailjs from '@emailjs/browser';

import { RevealDirective } from '../../shared/reveal.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';
import { ToastService } from '../../services/toast.service';
import { LangService } from '../../services/lang.service';

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
  lang = inject(LangService);

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

      this.zone.run(() => {
        const t = this.lang.t();
        if (attendance === 'no') {
          this.toastService.show(t.toastSad, 'sad');
        } else {
          this.toastService.show(t.toastSuccess, 'success');
        }
        form.reset();
        this.isSubmitting = false;
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      this.zone.run(() => {
        this.toastService.show(this.lang.t().toastError, 'error');
        this.isSubmitting = false;
      });
    }
  }
}