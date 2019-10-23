import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"]
})
export class MenubarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(() => {
      $(window).scroll(() => {
        const scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css({
            background: "#fff",
            "transition-duration": "4s"
          });

          $(".nav-link").css({
            color: "#000",
            "transition-duration": "1s"
          });
        } else {
          $(".navbar").css("background", "transparent");
          $(".nav-link").css("color", "#fff");
        }
      });
    });
  }
}
