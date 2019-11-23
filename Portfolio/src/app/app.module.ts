import { BrowserModule } from "@angular/platform-browser";
// import { AlertModule } from "ngx-bootstrap";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenubarComponent, FooterComponent, SkillsComponent, PortfolioComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
