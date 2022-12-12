import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentCompnent} from "./student/student.compnent";
import {ClassCompnent} from "./class/class.compnent";

@NgModule({
  declarations: [
    AppComponent,StudentCompnent,ClassCompnent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
