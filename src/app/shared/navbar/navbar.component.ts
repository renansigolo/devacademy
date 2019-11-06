import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidenavLinks = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Login',
      url: 'login'
    }
    // {
    //   name: 'Courses',
    //   url: 'course'
    // }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
