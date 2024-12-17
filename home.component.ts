import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  cards = [
    {
      image: 'assets/images/horse.jpeg',
      title: 'Card 1',
      description: 'This is card 1.',
    },
    {
      image: 'assets/images/horse2.jpeg',
      title: 'Card 2',
      description: 'This is card 2.',
    },
    {
      image: 'assets/images/horse3.jpeg',
      title: 'Card 3',
      description: 'This is card 3.',
    },
  ];
  currentIndex = 0;
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    } else {
      this.currentIndex = this.cards.length - 1;
    }
  }
  next() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex = this.currentIndex + 1;
    } else {
      this.currentIndex = 0;
    }
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
