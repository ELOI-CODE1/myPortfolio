import { Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  constructor() {
    // Typewriter runs in the browser only — keeps SSR output stable.
    afterNextRender(() => this.startTypewriter());
  }

  private roles = [
    'Full Stack Developer',
    'Java & Spring Boot Engineer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  typed = signal('');

  socials = [
    { label: 'GitHub', href: 'https://github.com/ELOI-CODE1', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eloi-izabayo/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:izabayoeloi2@gmail.com', icon: 'mail' },
    { label: 'WhatsApp', href: 'https://wa.me/250798252250', icon: 'whatsapp' }
  ];

  stats = [
    { value: '1+', label: 'Years' },
    { value: '10+', label: 'Projects' },
    { value: '6+', label: 'Stacks' }
  ];

  private startTypewriter() {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = this.roles[roleIndex];

      if (!deleting) {
        this.typed.set(current.slice(0, ++charIndex));
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1800); // pause on full word
          return;
        }
      } else {
        this.typed.set(current.slice(0, --charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % this.roles.length;
        }
      }

      setTimeout(tick, deleting ? 45 : 90);
    };

    tick();
  }
}
