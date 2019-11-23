import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      // run the fade() function every 2 seconds
      setInterval(function() {
        fade();
      }, 3000);

      // toggle between fadeIn and fadeOut with 0.3s fade duration.
      function fade() {
        $("span").fadeToggle(500);
      }
    });
  }
}
