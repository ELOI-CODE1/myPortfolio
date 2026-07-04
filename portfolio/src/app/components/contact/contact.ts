import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, Reveal],
  templateUrl: './contact.html',
})
export class Contact {
  year = new Date().getFullYear();
}
