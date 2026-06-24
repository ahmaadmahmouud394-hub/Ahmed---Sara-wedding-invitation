import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class WelcomeComponent implements OnInit {
  lang = inject(LangService);
  isOpened = false;
  isHidden = false;
  particles: string[] = [];

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    this.particles = Array.from({ length: 20 }, () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 4 + 2;
      const delay = Math.random() * 6;
      const duration = Math.random() * 6 + 6;
      const opacity = Math.random() * 0.4 + 0.1;
      return `left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity}`;
    });
  }

  openInvitation() {
    if (this.isOpened) return;
    this.isOpened = true;
    setTimeout(() => {
      this.isHidden = true;
    }, 1400);
  }
}
