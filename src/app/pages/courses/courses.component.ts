import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      title: 'Course Title 1',
      image: 'https://via.placeholder.com/350x200'
    },
    {
      title: 'Course Title 2',
      image: 'https://via.placeholder.com/350x200'
    },
    {
      title: 'Course Title 3',
      image: 'https://via.placeholder.com/350x200'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
