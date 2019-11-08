import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { SnackService } from '@services/snack.service'
import { environment } from '@environments/environment'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  getNotifiedForm: FormGroup
  formStatus: null | 'loading' | 'submitted' = null

  partnersData = [
    {
      name: 'DigitalHut',
      imgUrl: 'assets/imgs/partners/digitalhut.png',
      webUrl: 'https://digitalhut.com.au/'
    },
    {
      name: 'Live Design',
      imgUrl: 'assets/imgs/partners/live-design.png',
      webUrl: 'https://livedesign.com.br'
    }
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snack: SnackService
  ) {
    this.getNotifiedForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  submitGetNotifiedForm() {
    if (!this.getNotifiedForm.valid) {
      this.snack.showInfo(`Ops, something isn't right`)
      return console.error('Form is not valid')
    }

    this.formStatus = 'loading'

    this.sendEmail()
      .then(() => {
        // this.showSnackBar(`You've been successfully subscribed`)
        this.formStatus = 'submitted'
        return
      })
      .catch(error => {
        this.formStatus = null
        this.snack.showInfo(error.message)
        return console.error(error)
      })
      .finally()
  }

  async sendEmail() {
    return this.http
      .post<any>(`${environment.cloudFunctionUrl}/sendEmail`, {
        firstName: this.getNotifiedForm.get('firstName').value,
        lastName: this.getNotifiedForm.get('lastName').value,
        email: this.getNotifiedForm.get('email').value
      })
      .toPromise()
    // .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     this.showSnackBar(`Ops, something went wrong`)
    //     return throwError(error)
    //   })
    // )
    // .subscribe(() => {
    //   return this.showSnackBar(`You've been successfully subscribed`)
    // })
  }
}