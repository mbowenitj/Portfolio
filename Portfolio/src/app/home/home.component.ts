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
      // $(window).scroll(function() {
      //   if ($(this).scrollTop() === 100) {
      //     // this refers to window
      //     alert("You've scrolled 100 pixels.");
      //   }
      // });
      // run the fade() function every 2 seconds
      setInterval(function() {
        fade();
      }, 3000);

      // toggle between fadeIn and fadeOut with 0.3s fade duration.
      function fade() {
        $(".jobRole").fadeToggle(500);
      }

      // $(window).scroll(function() {
      $(window).scroll(testScroll);

      var viewed = false;

      function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
      }

      function testScroll() {
        if (isScrolledIntoView($("#counter")) && !viewed) {
          viewed = true;
          $(".Count").each(function() {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text()
                },
                {
                  duration: 4000,
                  easing: "swing",
                  step: function(now) {
                    $(this).text(Math.ceil(now));
                  }
                }
              );
          });
        }
      }
      // function testUp() {
      //   if (isScrolledIntoView($("#portfolio")) && !viewed) {
      //     viewed = true;
      //     alert("ninja");
      //   }
      // }
    });
  }
}
