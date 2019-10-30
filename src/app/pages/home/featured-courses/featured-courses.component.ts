import { Component, OnInit } from '@angular/core'
import { CoursesService } from '@services/courses.service'
import { Course } from 'app/interfaces/course.model'

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.scss']
})
export class FeaturedCoursesComponent implements OnInit {
  courses: Course[]

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getFeaturedCourses().subscribe(res => {
      this.courses = res.length === 0 ? null : res
    })
  }
}
