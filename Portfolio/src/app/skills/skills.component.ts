import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $("#skillbar_html").animate({ width: "95%" }, 1500);
      $("#skillbar_css").animate({ width: "95%" }, 1500);
      $("#skillbar_angular").animate({ width: "80%" }, 1500);
      $("#skillbar_javascript").animate({ width: "80%" }, 1500);
      $("#skillbar_bootstrap").animate({ width: "90%" }, 1500);
    });
  }
}
