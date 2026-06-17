import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'Del Coffee Website',
      description: 'A modern coffee shop website with a clean and elegant design.',
      tags: ['AngularJS', 'HTML/CSS', 'JavaScript'],
      link: 'https://del-coffee.vercel.app/'
    },
    {
      title: 'Civil Engineer Portfolio',
      description:
        'A clean, professional portfolio website built for a civil engineer and structural designer to showcase projects, expertise, and credentials to potential clients.',
      tags: ['Web', 'HTML/CSS', 'Responsive'],
      link: 'https://nathan-pied-three.vercel.app/'
    },
    {
      title: 'REVAS DebtFree',
      description:
        'A cross-platform mobile app (iOS, Android & Web) for managing debtors, debts, and collections. Features secure login, role-based access, search, and a collections analytics dashboard. I built the mobile frontend and integrated it with a REST API backend.',
      tags: ['Mobile', 'REST API', 'Auth', 'RBAC'],
      link: '#'
    }
  ];
}