import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { NavComponent } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { Countdown } from './components/countdown/countdown';
import { EventDetails } from './components/event-details/event-details';
import { Gallery } from './components/gallery/gallery';
import { RsvpForm } from './components/rsvp-form/rsvp-form';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { ToastComponent } from './components/toast/toast';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    WelcomeComponent,
    NavComponent,
    Hero,
    Countdown,
    EventDetails,
    Gallery,
    RsvpForm,
    ContactComponent,
    FooterComponent,
    ToastComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('A-and-S-invite');
}
