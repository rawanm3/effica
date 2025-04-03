import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  backgroundOpacity = 0; // Initial opacity

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = 300; // Adjust how fast opacity increases
    this.backgroundOpacity = Math.min(scrollTop / maxScroll, 1); // Normalize opacity (0 to 1)
  }
}
