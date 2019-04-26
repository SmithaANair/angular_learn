import {Directive,ElementRef,OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core'

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'orange';
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
       // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
       this.backgroundColor = this.defaultColor;
    }

    ngOnInit() {
       // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    }

}