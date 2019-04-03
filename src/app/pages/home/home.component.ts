import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any = []

  constructor() {
    this.slides = [
      {
        image: 'http://via.placeholder.com/640x320'
      },
      {
        image: 'http://via.placeholder.com/640x320'
      }
    ]
  }

  ngOnInit() {}
}
