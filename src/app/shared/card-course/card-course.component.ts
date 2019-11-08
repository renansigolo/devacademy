import { Component, OnInit } from '@angular/core'
import { CoursesService } from '@services/courses.service'
import { Course } from 'app/interfaces/course.model'

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent implements OnInit {
  courses: Course[]

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getFeaturedCourses().subscribe(res => {
      this.courses = res.length === 0 ? null : res
    })
  }
}
