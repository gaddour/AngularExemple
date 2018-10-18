import { Directive, ElementRef, Renderer, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[footerDirective]'
})

export class FooterDirective implements OnInit {

    @Input() footerDirectiveColor: string;
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', this.footerDirectiveColor);
    }

    @HostListener('mouseover') onMouseOver() {
            this.renderer.setElementStyle(this.el.nativeElement, 'color', 'black');
            this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
   }

   @HostListener('mouseout') onMouseOut() {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', this.footerDirectiveColor);
        this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'auto');
    }
}


