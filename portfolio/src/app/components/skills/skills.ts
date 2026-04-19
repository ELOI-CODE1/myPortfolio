import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  constructor(public theme: ThemeService) {}

  skills = [
    { name: 'Java', level: 75, icon: '/images/java.png' },
    { name: 'HTML / CSS', level: 90, icon: '/images/html.png' },
    { name: 'SQL / Databases', level: 70, icon: '/images/database.png' },
    { name: 'JAVA-SWING', level:70, icon: '/images/swing.png'},
    { name: 'Spring boot', level:60, icon: '/images/spring.png'},
    { name: 'C', level:50, icon: '/images/c.png'}
  ];
}
