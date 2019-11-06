import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.user.subscribe(ref => {
      console.log('TCL: LoginComponent -> ngOnInit -> ref', ref)
    })
  }
}
