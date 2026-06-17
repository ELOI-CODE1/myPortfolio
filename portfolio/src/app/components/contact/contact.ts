import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../directives/reveal'; // scroll-reveal animation directive

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  year = new Date().getFullYear();
}
