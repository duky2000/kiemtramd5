import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ViewBookComponent } from './book/view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    EditBookComponent,
    CreateBookComponent,ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
