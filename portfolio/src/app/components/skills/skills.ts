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
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'HTML / CSS', level: 90, icon: '🎨' },
    { name: 'SQL / Databases', level: 80, icon: '🗄️' },
  ];
}
