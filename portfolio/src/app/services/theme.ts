import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  toggle() {
    this.isDark.set(!this.isDark());
    document.documentElement.classList.toggle('dark', this.isDark());
  }
}