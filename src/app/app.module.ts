import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { _headerComponent } from './header/app.headerComponent';
import { _navComponent } from './nav/app.navComponent';
import { _contentComponent } from './content/app.contentAreaComponent';
import { _footerComponent } from './footer/app.footerComponent';
import { _aboutComponent } from './about/app.aboutComponent';
import { _contactComponent } from './contact/app.contactComponent';

@NgModule({
  declarations: [
    AppComponent,
    _headerComponent,
    _navComponent,
    _contentComponent,
    _footerComponent,
    _aboutComponent,
    _contactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
          path: '',
          component: _contentComponent
      },
      {
          path: 'about',
          component: _aboutComponent
      },
      {
        path: 'contact',
        component: _contactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
