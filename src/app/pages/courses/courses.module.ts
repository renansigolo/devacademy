import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoursesRoutingModule } from './courses-routing.module'
import { CourseListComponent } from './course-list/course-list.component'
import { CourseDetailsComponent } from './course-details/course-details.component'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'
import { SharedModule } from 'app/shared/shared.module'

const components = [CourseListComponent, CourseDetailsComponent]

const modules = [
  CommonModule,
  CoursesRoutingModule,
  SharedModule,
  MatExpansionModule,
  MatListModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class CoursesModule {}
