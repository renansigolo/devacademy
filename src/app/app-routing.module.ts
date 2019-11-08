import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { AuthGuard } from './user/auth.guard'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
  // {
  //   path: 'course',
  //   loadChildren: () =>
  //     import('@pages/courses/courses.module.ts').then(m => m.CoursesModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
