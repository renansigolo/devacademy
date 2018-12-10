import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './my-experiment/main/main.component'

import { HomeComponent } from '@pages/home/home.component'
import { CoursesComponent } from '@pages/courses/courses.component'
import { CourseDetailsComponent } from '@pages/course-details/course-details.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'myExperiment', component: MainComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'courses/details', component: CourseDetailsComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
