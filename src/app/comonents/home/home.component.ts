import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { WorkComponent } from "../work/work.component";
import { TestemonialsComponent } from "../testemonials/testemonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.el.nativeElement.querySelector('.rt-photo');
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      this.isVisible = true;
    }
  }
}
