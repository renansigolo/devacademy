import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  courses = [
    {
      name: 'Build Your First App',
      path: 'courses/details'
    },
    {
      name: 'Build your first website',
      path: 'courses/details'
    }
  ]

  constructor() {
    console.log(this.courses)
  }
}
