import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  showInfo(msg: string) {
    const config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }
    this.snackBar.open(msg, 'Dismiss', config)
  }

  authError() {
    this.snackBar.open('You must be logged in!', 'OK', {
      duration: 5000
    })

    return this.snackBar._openedSnackBarRef
      .onAction()
      .pipe(tap(_ => this.router.navigate(['/login'])))
      .subscribe()
  }
}
