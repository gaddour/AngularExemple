import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">
               <p footerDirective [footerDirectiveColor]="'blue'">Made with <span class="heart">❤</span></p>
            </div>`
})

export class FooterComponent {
  constructor() {
  }
}
