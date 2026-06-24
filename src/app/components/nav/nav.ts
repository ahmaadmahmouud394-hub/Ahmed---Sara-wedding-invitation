import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class NavComponent {
  lang = inject(LangService);
  isScrolled = signal(false);
  menuOpen = signal(false);

  get navLinks() {
    const t = this.lang.t();
    return [
      { label: t.navHome,    href: '#home' },
      { label: t.navStory,   href: '#story' },
      { label: t.navDetails, href: '#details' },
      { label: t.navGallery, href: '#gallery' },
      { label: t.navContact, href: '#contact' },
    ];
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
