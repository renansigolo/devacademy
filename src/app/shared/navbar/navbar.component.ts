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
      path: 'courses/build-your-first-app'
    },
    {
      name: 'Build your first website',
      path: 'courses/build-your-first-website'
    },
    {
      name: 'Build an app with image recognition',
      path: 'courses/build-an-app-with-image-recognition'
    }
  ]

  constructor() {}
}
