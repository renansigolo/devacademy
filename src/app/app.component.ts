import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';

import { SignupComponent } from './modals/signup/signup.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openSignup(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '80vw'
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('The Signup dialog was closed')
    })
  }
}
