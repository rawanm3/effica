import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any; // Avoid TypeScript errors for Bootstrap

@Component({
  selector: 'app-work',
  standalone: true, // ✅ Ensure this is here
  
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {  // Only runs in the browser
      const workCarousel = document.querySelector('#workCarousel');
      if (workCarousel) {
        new bootstrap.Carousel(workCarousel);
      }
    }
  }
}
