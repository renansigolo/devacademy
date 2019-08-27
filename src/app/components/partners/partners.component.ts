import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partnersData = [
    {
      name: 'DigitalHut',
      imgUrl: 'assets/imgs/partners/digitalhut.png',
      webUrl: 'https://digitalhut.com.au/'
    },
    {
      name: 'Live Design',
      imgUrl: 'assets/imgs/partners/live-design.png',
      webUrl: 'https://livedesign.com.br'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
