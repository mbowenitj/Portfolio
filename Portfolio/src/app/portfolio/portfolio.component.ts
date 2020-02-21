import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  buttonValue: string;

  portFolios = [
    {
      id: 1,
      imgUrl: "/assets/images/tito.png",
      url: "https://www.google.co.za"
    },
    {
      id: 2,
      imgUrl: "/assets/images/tito.png",
      url: "https://www.ninga.co.za"
    },
    {
      id: 3,
      imgUrl: "/assets/images/tito.png",
      url: "www.google.com"
    },
    {
      id: 4,
      imgUrl: "/assets/images/tito.png",
      url: "www.google.com"
    },
    {
      id: 5,
      imgUrl: "/assets/images/tito.png",
      url: "www.google.com"
    },
    {
      id: 6,
      imgUrl: "/assets/images/tito.png",
      url: "www.google.com"
    },
    {
      id: 7,
      imgUrl: "/assets/images/tito.png",
      url: "www.google.com"
    }
  ];

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToPage(url: string) {
    window.location.href = url;

  }

  // myFunction(id, url) {
  //   window.location.href  = "url?id=" + id;
  // }

  ngOnInit() { }
}
