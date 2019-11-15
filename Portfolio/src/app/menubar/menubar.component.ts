import { Component, OnInit, HostListener } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.scss"]
})
export class MenubarComponent implements OnInit {
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showScroll = true;
    } else if (
      this.showScroll &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 5);
      }
    })();
  }

  constructor() {}

  ngOnInit() {
    $(document).ready(() => {
      // change navbar color on scroll
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
      // Add smooth scrolling to all links
      $("a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "50") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          const hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            500,
            function() {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            }
          );
        } // End if
      });
    });
  }
}
