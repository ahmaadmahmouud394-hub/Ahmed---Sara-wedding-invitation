import { Injectable, signal, OnDestroy } from '@angular/core';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root',
})
export class CountdownService implements OnDestroy {
  // Placeholder date
  private targetDate = new Date('2026-07-24T21:20:00+03:00').getTime();
  private intervalId: any;

  readonly timeLeft = signal<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  constructor() {
    this.startCountdown();
  }

  private startCountdown() {
    this.calculateTimeLeft();
    this.intervalId = setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  private calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = this.targetDate - now;

    if (difference > 0) {
      this.timeLeft.set({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    } else {
      this.timeLeft.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (this.intervalId) clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
