import { Component, OnInit } from '@angular/core'
import { CoursesService } from '@services/courses.service'
import { Observable } from 'rxjs'
import { Course } from 'app/interfaces/course.model'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  panelOpenState
  course$: Observable<Course>
  courseDetails = {
    date: Date.now(),
    location: 'WeWork, 100 Harris St. - Pyrmont',
    price: 20.0,
    enrolUrl: '#'
  }
  instructor = {
    name: 'Renan Sigolo',
    imageUrl: 'https://placehold.it/400?text=RS',
    bio: `Renan Sigolo is a full stack web developer with broad experience, ranging from start-ups, such as Mastertech and Stitch to established multinational companies in different industries such as McDonald’s, Apple, Fox International Channels and Fox Sports. His creativity and enthusiasm was crucial to train, qualify students and also build the initial structure for a project on Facebook to teach over 7,000 people how to code.
    Renan is certified by the University of Cambridge, graduated in Business Management with an MBA in IT Management and a Google Educator Trainer.
    Renan’s passion for development, coding and drive for constant growth has allowed him to identify and carve out a particular niche targeting individuals with a variety of programming backgrounds and skills - that are looking for better ways to upskill themselves in an increasingly demanding and competitive technological focused workplace. As such, DevAcademy was formed to provide a hands-on, and cost-effective solution for individuals looking to either further develop their skills.
    `
  }
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.course$ = this.coursesService.getCourse('UwUsCoB1gm2MCXtieuRK')
  }
}
