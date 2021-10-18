import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: '[appFatten]' })
export class FattenDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'fontWeight',
    //   'bolder'
    // );
    // this.elementRef.nativeElement.innerHTML = ' paperella';
  }

  @Input()
  set fatLevel(fl: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', fl);
  }
  // @HostListener('click')
  // onClickEventTriggered() {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  // }

  // @Input()
  // set appFatten(number: string) {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'fontWeight', number);
  // }
}
