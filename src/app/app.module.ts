import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentCompnent} from "./student/student.compnent";
import {ClassCompnent} from "./class/class.compnent";
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CatagoryComponent } from './catagory/catagory.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import * as path from "path";
import {HttpClient, HttpClientModule} from "@angular/common/http";
// Khai báo danh sách các ruoting
const appRoutes: Routes =[
  {path:'', component:HomeComponent},
  {path:'category', component:CatagoryComponent},
  {path:'category/:textCate', component:CatagoryComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
]
@NgModule({
  declarations: [
    AppComponent,StudentCompnent,ClassCompnent, HomeComponent, ProductComponent, CatagoryComponent, LoginComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
