import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'app/shared/shared.module'
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component'
import { HomeComponent } from './home.component'

const routes: Routes = [{ path: '', component: HomeComponent }]

const components = [HomeComponent, FeaturedCoursesComponent]

const modules = [
  CommonModule,
  RouterModule.forChild(routes),
  SharedModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class HomeModule {}
