import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  constructor(public theme: ThemeService) {}

  projects = [
    {
      title: 'Project One',
      description: 'A web application built with Python and SQL that solves a real-world problem.',
      tags: ['Python', 'SQL', 'HTML/CSS'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A database-driven dashboard with clean UI and powerful data visualization.',
      tags: ['SQL', 'HTML/CSS', 'Python'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'A responsive portfolio-style site built with modern HTML and CSS techniques.',
      tags: ['HTML/CSS', 'Python'],
      link: '#'
    }
  ];
}