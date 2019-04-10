import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMedia = [
    {
      name: 'Facebook',
      path: 'https://www.facebook.com/devacademyau'
    },
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/devacademyau'
    },
    {
      name: 'Linkedin',
      path: 'https://linkedin.com/company/devacademyau'
    },
    {
      name: 'Twitter',
      path: 'https://twitter.com/devacademyau'
    },
    {
      name: 'Google',
      path: 'https://www.google.com/search?q=DevAcademy&ludocid=14494742044709126411&lsig=AB86z5XGivhQdjEV2v6d0KsGZ0pM#fpstate=lie'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
