import { BrowserModule } from "@angular/platform-browser";
// import { AlertModule } from "ngx-bootstrap";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenubarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
