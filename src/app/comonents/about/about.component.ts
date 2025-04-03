import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.el.nativeElement.querySelector('.about-p','.about-h3','.line-bg','.line-bg2','.line');
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      this.isVisible = true;
    }
  }
}