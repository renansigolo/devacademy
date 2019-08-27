import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Component({
  selector: 'app-get-notified',
  templateUrl: './get-notified.component.html',
  styleUrls: ['./get-notified.component.scss']
})
export class GetNotifiedComponent implements OnInit {
  getNotifiedForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.getNotifiedForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  submitGetNotifiedForm() {
    if (!this.getNotifiedForm.valid) {
      this.showSnackBar(`Ops, it looks like something isn't right`)
      return console.error('Form is not valid')
    }

    return this.sendEmail()
  }

  async sendEmail() {
    return this.http
      .post<any>(
        'https://us-central1-devacademyau.cloudfunctions.net/sendEmail',
        {
          firstName: this.getNotifiedForm.get('firstName').value,
          lastName: this.getNotifiedForm.get('lastName').value,
          email: this.getNotifiedForm.get('email').value
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.showSnackBar(`Ops, something went wrong`)
          return throwError(error)
        })
      )
      .subscribe(() => {
        return this.showSnackBar(`You've been successfully subscribed`)
      })
  }

  showSnackBar(msg: string) {
    const config: MatSnackBarConfig = {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }
    this.snackBar.open(msg, 'Dismiss', config)
  }
}
