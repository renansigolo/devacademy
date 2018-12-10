import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { MainComponent } from './my-experiment/main/main.component'
import { CoursesComponent } from './pages/courses/courses.component'
import { CourseDetailsComponent } from './pages/course-details/course-details.component'
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'myExperiment', component: MainComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'courses/details', component: CourseDetailsComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
