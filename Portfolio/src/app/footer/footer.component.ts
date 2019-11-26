import { Component, OnInit } from "@angular/core";
// import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  copyrightCurrentDate: number = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
