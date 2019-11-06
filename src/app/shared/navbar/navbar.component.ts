import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { map, shareReplay } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}
}
