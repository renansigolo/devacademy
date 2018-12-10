import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginComponent } from './modals/login/login.component'
import { SignupComponent } from './modals/signup/signup.component'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public dialog: MatDialog) {}

	openLogin(): void {
		const dialogRef = this.dialog.open(LoginComponent, {
			width: '80vw'
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('The Login dialog was closed')
		})
	}

	openSignup(): void {
		const dialogRef = this.dialog.open(SignupComponent, {
			width: '80vw'
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('The Signup dialog was closed')
		})
	}
}
