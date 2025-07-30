import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // ele is an object of ElementRef class
  // ele = new ElementRef();
  constructor(private ele: ElementRef) {   // Dependency Injection
    console.log(this.ele); // ele = h1
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow', 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }

}
