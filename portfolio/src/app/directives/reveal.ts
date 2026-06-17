import { Directive, ElementRef, afterNextRender, input } from '@angular/core';

/**
 * Fades + slides an element into view when it scrolls into the viewport.
 * Browser-only (IntersectionObserver runs inside afterNextRender), so SSR
 * output stays intact. Optional numeric value sets a stagger delay in ms:
 *   <div appReveal="150"> ... </div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class Reveal {
  delay = input(0, {
    alias: 'appReveal',
    transform: (value: number | string) => Number(value) || 0
  });

  constructor(el: ElementRef<HTMLElement>) {
    const host = el.nativeElement;
    host.classList.add('reveal-init');

    afterNextRender(() => {
      const ms = Number(this.delay()) || 0;
      if (ms) host.style.transitionDelay = `${ms}ms`;

      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              host.classList.add('reveal-show');
              io.unobserve(host);
            }
          }
        },
        { threshold: 0.15 }
      );
      io.observe(host);
    });
  }
}
