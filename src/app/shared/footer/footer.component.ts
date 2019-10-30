import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMedia = [
    {
      name: 'Email',
      path: 'mailto:hello@devacademy.com.au?Subject=Hello DevAcademy'
    },
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
    // {
    //   name: 'Meetup',
    //   path: 'https://www.meetup.com/DevAcademy-Learn-to-Code/'
    // },
    {
      name: 'Spotify',
      path:
        'https://open.spotify.com/playlist/2XUQnFSeVIPQjXcc3IOcwm?si=5OlaTi9CRHSfksOpidA_ZA'
    },
    {
      name: 'Twitter',
      path: 'https://twitter.com/devacademyau'
    }
    // {
    //   name: 'Google',
    //   path:
    //     'https://www.google.com/search?q=DevAcademy&ludocid=14494742044709126411&lsig=AB86z5XGivhQdjEV2v6d0KsGZ0pM#fpstate=lie'
    // }
  ]

  constructor() {}

  ngOnInit() {}
}
