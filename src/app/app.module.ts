import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BookService} from './service/book.service';
import {BookListComponent} from './components/book-list.component';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatGridListModule, MatIconModule, MatIconRegistry, MatToolbarModule} from '@angular/material';
import {BookComponent} from './components/book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MatIconRegistry, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
