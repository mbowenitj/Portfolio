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
      $("#skillbar_html").animate({ width: "85%" }, 1500);
      $("#skillbar_css").animate({ width: "55%" }, 1500);
      $("#skillbar_angular").animate({ width: "75%" }, 1500);
      $("#skillbar_javascript").animate({ width: "55%" }, 1500);
      $("#skillbar_bootstrap").animate({ width: "75%" }, 1500);
    });
  }
}
