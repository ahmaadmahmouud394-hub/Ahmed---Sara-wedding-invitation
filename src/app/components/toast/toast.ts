import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast" [ngClass]="toast.type">
          <span class="toast-icon">
            @if (toast.type === 'success') { ✨ }
            @else if (toast.type === 'sad') { 😔 }
            @else { ⚠️ }
          </span>
          <span class="toast-message">{{ toast.message }}</span>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      pointer-events: none;
    }
    .toast {
      background: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 280px;
      animation: toastSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
      pointer-events: auto;
      border-left: 3px solid var(--color-gold);
    }
    .toast.success { border-left-color: #4ade80; }
    .toast.sad { border-left-color: #94a3b8; }
    .toast.error { border-left-color: #ef4444; }
    
    .toast-icon { font-size: 1.2rem; }
    .toast-message {
      font-family: var(--font-caps);
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-text);
    }
    
    @keyframes toastSlideIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}
