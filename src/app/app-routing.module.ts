import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/home/home.module.ts').then(m => m.HomeModule)
  },
  {
    path: 'course',
    loadChildren: () =>
      import('@pages/courses/courses.module.ts').then(m => m.CoursesModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/home/home.module.ts').then(m => m.HomeModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
