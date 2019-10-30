import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CourseDetailsComponent } from './course-details/course-details.component'
import { CourseListComponent } from './course-list/course-list.component'

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: ':id', component: CourseDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
