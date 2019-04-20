import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-get-notified',
  templateUrl: './get-notified.component.html',
  styleUrls: ['./get-notified.component.scss']
})
export class GetNotifiedComponent implements OnInit {
  getNotifiedForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.getNotifiedForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {}

  submitGetNotifiedForm() {
    console.log(this.getNotifiedForm.value)

    if (!this.getNotifiedForm.valid) {
      console.error('Errouuuu')
    }
  }
}
