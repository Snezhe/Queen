import { Component } from '@angular/core';
import { _headerComponent } from './header/app.headerComponent';
import { _navComponent } from './nav/app.navComponent';
import { _contentComponent } from './content/app.contentAreaComponent';
import { _footerComponent } from './footer/app.footerComponent';
import { _aboutComponent } from './about/app.aboutComponent';
import { _contactComponent } from './contact/app.contactComponent';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
})
export class AppComponent {
}