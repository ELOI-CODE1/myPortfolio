import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Circle radius used by the progress rings (must match the SVG below).
  private readonly radius = 42;
  readonly circumference = 2 * Math.PI * this.radius;

  skills = [
    { name: 'Java', icon: '/images/java.png' },
    { name: 'HTML / CSS', icon: '/images/html.png' },
    { name: 'SQL / Databases', icon: '/images/database.png' },
    { name: 'Java Swing', icon: '/images/swing.png' },
    { name: 'Spring Boot', icon: '/images/spring.png' },
    { name: 'C', icon: '/images/c.png' }
  ];

  /** Dash offset for a given skill level — full circle when 0, empty when 100. */
  ringOffset(level: number): number {
    return +(this.circumference * (1 - level / 100)).toFixed(1);
  }

  proficiency(level: number): string {
    if (level >= 85) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 55) return 'Intermediate';
    return 'Familiar';
  }
}
