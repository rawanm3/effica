import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {

  @ViewChildren('contentBlock', { read: ElementRef }) contentBlocks!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    // Create the IntersectionObserver to track the visibility of the content blocks
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.3  // Trigger the effect when 30% of the element is visible
    });

    // Observe each content block
    this.contentBlocks.forEach(block => {
      observer.observe(block.nativeElement);
    });
  }
}
