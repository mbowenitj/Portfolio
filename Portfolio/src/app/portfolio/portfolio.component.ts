import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  buttonValue: string;

  ngOnInit() { }

  portFolios = [
    {
      id: 1,
      imgUrl: "/assets/images/projects/usb-ed.jpg",
      url: "https://applications.usb-ed.com/?iID=c9a37630-0836-e511-80c8-005056b8008e"
    },
    {
      id: 2,
      imgUrl: "/assets/images/projects/presles.png",
      url: "https://online.presles.co.za/"
    },
    {
      id: 3,
      imgUrl: "/assets/images/projects/engagement-factory.jpg",
      url: "http://events.engagementfactory.com/cem"
    },
    {
      id: 4,
      imgUrl: "/assets/images/projects/vsm.png",
      url: "https://www.spendmanager.co.za/"
    },
    {
      id: 5,
      imgUrl: "/assets/images/projects/RICOH-SQ.jpg",
      url: "http://productionprinting.ricoh.co.uk/managing-enterprise-output"
    },
    {
      id: 6,
      imgUrl: "/assets/images/projects/thales-group.jpg",
      url: "https://www.thalesgroup.com/en"
    },
    {
      id: 7,
      imgUrl: "/assets/images/projects/mclaren.jpg",
      url: "https://www.mclaren.com/"
    },

    {
      id: 8,
      imgUrl: "/assets/images/projects/volvo.jpg",
      url: "http://dev.engagementfactory.com/Volvo-LP-anniversaire"
    },
    {
      id: 9,
      imgUrl: "/assets/images/projects/volvo2.png",
      url: "http://dev.engagementfactory.com/Volvo-LP-Bienvenue"
    },
    {
      id: 10,
      imgUrl: "/assets/images/projects/volvo4.jpg",
      url: "http://dev.engagementfactory.com/Volvo-LP-restitution"
    },
    {
      id: 11,
      imgUrl: "/assets/images/projects/Ricoh-Exton-crop.jpg",
      url: "http://biznes.ricoh.pl/"
    },
    {
      id: 12,
      imgUrl: "/assets/images/projects/ricoh2.png",
      url: "http://communication.ricoh.no/promo-ucs-advanced"
    },
    {
      id: 13,
      imgUrl: "/assets/images/projects/Ricoh-1-Main-700x445.jpg",
      url: "https://produkte.ricoh.at/promo-multifunktionssysteme"
    },
    {
      id: 14,
      imgUrl: "/assets/images/projects/ricoh-supercollaboration1.jpg",
      url: "https://www.ricoh.ch/en/products/audio-visual-systems/collaboration-boards/"
    }
  ];

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToPage(url: string) {
    window.location.href = url;

  }


}
