import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('shopping-cart',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/shopping-cart.svg'))
      .addSvgIconSetInNamespace('core',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/core-icon-set.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }
}
