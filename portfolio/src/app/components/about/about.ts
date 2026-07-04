import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Reveal],
  templateUrl: './about.html',
})
export class About {
  stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: '6+', label: 'Technologies' },
  ];

  highlights = [
    'Clean, maintainable, well-documented code',
    'Responsive, accessible, mobile-first design',
    'Full-stack delivery — front-end to database',
    'Fast learner who loves new challenges'
  ];

  stack = ['Angular', 'Java', 'Spring Boot', 'TypeScript', 'SQL', 'Tailwind CSS', 'Git'];
}
