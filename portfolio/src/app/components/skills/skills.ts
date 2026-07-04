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
}
