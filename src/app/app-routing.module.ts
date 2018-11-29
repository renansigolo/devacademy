import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
	{ path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
	{ path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
	{ path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule' },
	{ path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
